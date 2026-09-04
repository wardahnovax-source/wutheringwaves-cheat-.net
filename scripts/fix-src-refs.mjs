#!/usr/bin/env node
/** Final pass: fix remaining Wuthering Waves references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['wutheringWavesImages', 'wutheringWavesImages'],
	["from '../data/wuthering-waves'", "from '../data/wuthering-waves'"],
	["from './wuthering-waves'", "from './wuthering-waves'"],
	['/undetected-wuthering-waves-cheats/', '/undetected-wuthering-waves-cheats/'],
	['/wuthering-waves-wallhack/', '/wuthering-waves-wallhack/'],
	['/wuthering-waves-teleport/', '/wuthering-waves-teleport/'],
	['/wuthering-waves-anti-cheat/', '/wuthering-waves-anti-cheat/'],
	['/wuthering-waves-cheats-2026/', '/wuthering-waves-cheats-2026/'],
	['/wuthering-waves-aimbot/', '/wuthering-waves-aimbot/'],
	['/wuthering-waves-esp/', '/wuthering-waves-esp/'],
	['/wuthering-waves-cheats/', '/wuthering-waves-esp/'],
	['Wuthering Waves Cheat', 'Wuthering Waves Cheat'],
	['Wuthering Waves cheats', 'Wuthering Waves cheats'],
	['Wuthering Waves wallhack', 'Wuthering Waves wallhack'],
	['Wuthering Waves radar', 'Wuthering Waves radar'],
	['Wuthering Waves Aimbot', 'Wuthering Waves Aimbot'],
	['Wuthering Waves ESP', 'Wuthering Waves ESP'],
	['Wuthering Waves', 'Wuthering Waves'],
	['Anti-Cheat', 'Anti-Cheat protection'],
	['anti-cheat', 'anti-cheat'],
	['wutheringwavescheat.net', 'wutheringwavescheat.net'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
