#!/usr/bin/env node
/**
 * Completes escape-from-wuthering-waves-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'wuthering-waves-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'wuthering-waves-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'wuthering-waves-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'wuthering-waves-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-wuthering-waves-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'wuthering-waves-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'wuthering-waves-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'wuthering-waves-god-mode', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/wuthering-waves-wuthering-waves/g, 'wuthering-waves'],
	[/wuthering-waves-anti-cheat-wuthering-waves/g, 'wuthering-waves-anti-cheat'],
	[/Wuthering Waves/g, 'Wuthering Waves'],
	[/Wuthering Waves/g, 'Wuthering Waves'],
	[/Call of Duty/g, 'Wuthering Waves'],
	[/Wuthering Waves Wallhack/g, 'Wuthering Waves Wallhack'],
	[/Wuthering Waves Radar Hack/g, 'Wuthering Waves Radar Hack'],
	[/Wuthering Waves Cheat Features/g, 'Wuthering Waves Cheat Features'],
	[/Wuthering Waves Cheat Pricing/g, 'Wuthering Waves Cheat Pricing'],
	[/Wuthering Waves Cheat Setup/g, 'Wuthering Waves Cheat Setup'],
	[/Wuthering Waves Cheat Status/g, 'Wuthering Waves Cheat Status'],
	[/Wuthering Waves Cheat Support/g, 'Wuthering Waves Cheat Support'],
	[/Wuthering Waves squad fight/g, 'Wuthering Waves squad fight'],
	[/Wuthering Waves squad builder/g, 'Wuthering Waves loadout builder'],
	[/Wuthering Waves store header/g, 'Wuthering Waves header'],
	[/Wuthering Waves wasteland combat/g, 'Wuthering Waves battle royale combat'],
	[/Wuthering Waves loadout builder/g, 'Wuthering Waves loadout builder'],
	[/Wuthering Waves pricing/g, 'Wuthering Waves pricing'],
	[/Wuthering Waves Anti-Cheat protection/g, 'Wuthering Waves Anti-Cheat protection'],
	[/on Wuthering Waves/g, 'on Wuthering Waves'],
	[/for Wuthering Waves/g, 'for Wuthering Waves'],
	[/Wuthering Waves guides/g, 'Wuthering Waves guides'],
	[/Wuthering Waves guide/g, 'Wuthering Waves guide'],
	[/Wuthering Waves hileleri/g, 'Wuthering Waves hileleri'],
	[/Wuthering Waves hile/g, 'Wuthering Waves hile'],
	[/Wuthering Waves hileleri/g, 'Wuthering Waves hileleri'],
	[/cheatów Wuthering Waves/g, 'cheatów Wuthering Waves'],
	[/cheat Wuthering Waves/g, 'cheat Wuthering Waves'],
	[/cheats Wuthering Waves/g, 'cheats Wuthering Waves'],
	[/trucos Wuthering Waves/g, 'trucos Wuthering Waves'],
	[/triche Wuthering Waves/g, 'triche Wuthering Waves'],
	[/trucchi Wuthering Waves/g, 'trucchi Wuthering Waves'],
	[/Wallhack Wuthering Waves/g, 'Wuthering Waves Wallhack'],
	[/cheat Wuthering Waves undetected/g, 'cheat Wuthering Waves undetected'],
	[/cheats Wuthering Waves undetected/g, 'cheats Wuthering Waves undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/anti-cheat/gi, 'anti-cheat'],
	[/Anti-Cheat/g, 'Anti-Cheat protection'],
	[/escape-from-wuthering-waves-cheats/g, 'escape-from-wuthering-waves-cheats'],
	[/escape-from-wuthering-waves/g, 'wuthering-waves'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Wuthering Waves'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Wuthering Waves anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Wuthering Waves Cheat')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Wuthering Waves guides/g, 'Wuthering Waves guides');
	content = content.replace(/Wuthering Waves guide/g, 'Wuthering Waves guide');
	content = content.replace(/Wuthering Waves hileleri/g, 'Wuthering Waves hileleri');
	content = content.replace(/Wuthering Waves hile/g, 'Wuthering Waves hile');
	content = content.replace(/cheat Wuthering Waves/g, 'cheat Wuthering Waves');
	content = content.replace(/cheats Wuthering Waves/g, 'cheats Wuthering Waves');
	content = content.replace(/trucos Wuthering Waves/g, 'trucos Wuthering Waves');
	content = content.replace(/triche Wuthering Waves/g, 'triche Wuthering Waves');
	content = content.replace(/trucchi Wuthering Waves/g, 'trucchi Wuthering Waves');
	content = content.replace(/cheatów Wuthering Waves/g, 'cheatów Wuthering Waves');
	content = content.replace(/читов Wuthering Waves/g, 'читов Wuthering Waves');
	content = content.replace(/читів Wuthering Waves/g, 'читів Wuthering Waves');
	content = content.replace(/Wuthering Wavesチート/g, 'Wuthering Wavesチート');
	content = content.replace(/Wuthering Waves 치트/g, 'Wuthering Waves 치트');
	content = content.replace(/Wuthering Waves作弊/g, 'Wuthering Waves作弊');
	content = content.replace(/Wuthering Waves rehberleri/g, 'Wuthering Waves rehberleri');
	content = content.replace(/Wuthering Waves gidsen/g, 'Wuthering Waves gidsen');
	content = content.replace(/Wuthering Waves průvodce/g, 'Wuthering Waves průvodce');
	content = content.replace(/Wuthering Waves guider/g, 'Wuthering Waves guider');
	content = content.replace(/Wuthering Waves related/g, 'Wuthering Waves related');
	content = content.replace(/Wuthering Waves ガイド/g, 'Wuthering Waves ガイド');
	content = content.replace(/Wuthering Waves 가이드/g, 'Wuthering Waves 가이드');
	content = content.replace(/Wuthering Waves指南/g, 'Wuthering Waves指南');
	content = content.replace(/Wuthering Waves गाइड/g, 'Wuthering Waves गाइड');
	content = content.replace(/Wuthering Waves panduan/g, 'Wuthering Waves panduan');
	content = content.replace(/Wuthering Waves คู่มือ/g, 'Wuthering Waves คู่มือ');
	content = content.replace(/Wuthering Waves hướng dẫn/g, 'Wuthering Waves hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Wuthering Waves Cheat SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
