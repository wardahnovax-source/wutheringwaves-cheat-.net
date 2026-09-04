#!/usr/bin/env node
/**
 * Process hero + screenshots for Wuthering Waves Cheat site.
 */
import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(ROOT, 'public', 'images');
const heroSource = '/home/ubuntu/.cursor/projects/workspace/assets/c7bb62e5-0e02-4a7c-8f7e-46f511750112.png';

const SCREENSHOTS = [
	{
		url: 'https://zadeyo.com/whsatano/unicore-wuthering-s1-81f93158221e.webp',
		dest: 'wuthering-waves-cheat-s1.webp',
	},
	{
		url: 'https://zadeyo.com/whsatano/unicore-wuthering-s2-a71bb1ce488a.webp',
		dest: 'wuthering-waves-cheat-s2.webp',
	},
	{
		/** In-game landscape crop from hero art — Wuthering Waves open world */
		cropFromHero: true,
		dest: 'wuthering-waves-cheat-s3.webp',
	},
];

const HERO_WIDTHS = [640, 1024, 1536, 2560];
const CONTENT_WIDTHS = [480, 960];

await mkdir(imagesDir, { recursive: true });

console.log('Processing hero image...');
await copyFile(heroSource, path.join(imagesDir, 'wuthering-waves-cheat-hero-full.png'));

const heroMeta = await sharp(heroSource).metadata();
console.log(`Hero source: ${heroMeta.width}x${heroMeta.height}`);

for (const width of HERO_WIDTHS) {
	const file = `wuthering-waves-cheat-hero-${width}w.webp`;
	const dest = path.join(imagesDir, file);
	const quality = width <= 640 ? 82 : width <= 1024 ? 88 : 92;
	const buffer = await sharp(heroSource)
		.resize({ width, withoutEnlargement: false })
		.webp({ quality, effort: 6 })
		.toBuffer();
	await writeFile(dest, buffer);
	console.log(`Wrote ${file} (${buffer.length} bytes)`);
}

console.log('Downloading screenshots...');
for (const item of SCREENSHOTS) {
	let buf;
	if (item.cropFromHero) {
		const meta = await sharp(heroSource).metadata();
		const w = meta.width ?? 1983;
		const h = meta.height ?? 793;
		buf = await sharp(heroSource)
			.extract({ left: 0, top: Math.floor(h * 0.05), width: Math.floor(w * 0.55), height: Math.floor(h * 0.9) })
			.resize(1920, 1080, { fit: 'cover', position: 'centre' })
			.webp({ quality: 92, effort: 6 })
			.toBuffer();
	} else {
		const res = await fetch(item.url);
		if (!res.ok) throw new Error(`Failed to fetch ${item.url}: ${res.status}`);
		buf = Buffer.from(await res.arrayBuffer());
		buf = await sharp(buf)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 90, effort: 6 })
			.toBuffer();
	}
	const out = path.join(imagesDir, item.dest);
	await writeFile(out, buf);
	console.log(`Wrote ${item.dest} (${buf.length} bytes)`);

	const base = item.dest.replace(/\.webp$/, '');
	for (const w of CONTENT_WIDTHS) {
		const variant = `${base}-${w}w.webp`;
		const vbuf = await sharp(buf)
			.resize({ width: w, withoutEnlargement: true })
			.webp({ quality: 85, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, variant), vbuf);
		console.log(`  → ${variant}`);
	}
}

console.log('Creating logo from hero crop...');
const logoBuffer = await sharp(heroSource)
	.extract({ left: Math.floor((heroMeta.width ?? 3840) * 0.55), top: 0, width: Math.floor((heroMeta.width ?? 3840) * 0.35), height: Math.floor((heroMeta.height ?? 1600) * 0.6) })
	.resize(512, 512, { fit: 'cover', position: 'centre' })
	.webp({ quality: 90 })
	.toBuffer();
await writeFile(path.join(imagesDir, 'wuthering-waves-cheat-logo.webp'), logoBuffer);

const logoPng = await sharp(logoBuffer).png().toBuffer();
await writeFile(path.join(imagesDir, 'wuthering-waves-cheat-logo.png'), logoPng);

console.log('Done.');
