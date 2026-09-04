#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Wuthering Waves Cheat.
 * Domain: wutheringwavescheat.net
 * Run from project root: node scripts/adapt-wuthering-waves.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'wuthering-waves-aimbot'],
	['tarkov-esp', 'wuthering-waves-esp'],
	['tarkov-wallhack', 'wuthering-waves-wallhack'],
	['tarkov-radar-hack', 'wuthering-waves-teleport'],
	['undetected-tarkov-cheats', 'undetected-wuthering-waves-cheats'],
	['tarkov-cheats-2026', 'wuthering-waves-cheats-2026'],
	['battleye-bypass', 'wuthering-waves-anti-cheat'],
	['tarkov-cheats', 'wuthering-waves-cheats'],
	['tarkov-cheat-download', 'wuthering-waves-cheat-download'],
	['tarkov-mod-menu', 'wuthering-waves-mod-menu'],
	['tarkov-soft-aim', 'wuthering-waves-soft-aim'],
	['best-tarkov-cheats', 'best-wuthering-waves-cheats'],
	['tarkov-aimbot-hack', 'wuthering-waves-aimbot-hack'],
	['tarkov-esp-hack', 'wuthering-waves-esp-hack'],
	['tarkov-unlock-all', 'wuthering-waves-god-mode'],
];

const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://wutheringwavescheat.net'],
	['https://www.tarkovcheats.org', 'https://www.wutheringwavescheat.net'],
	['www.tarkovcheats.org', 'www.wutheringwavescheat.net'],
	['tarkovcheats.org', 'wutheringwavescheat.net'],
	['support@tarkovcheats.org', 'support@wutheringwavescheat.net'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fwuthering-waves'],
	['/products/escape-from-tarkov', '/products/wuthering-waves'],
	['project-name=tarkovcheats', 'project-name=wutheringwavescheat'],
	['name = "tarkovcheats"', 'name = "wutheringwavescheat"'],
	['"name": "tarkov-cheats"', '"name": "wuthering-waves-cheat"'],
	['undetected-tarkov-cheats', 'undetected-wuthering-waves-cheats'],
	['best-tarkov-cheats', 'best-wuthering-waves-cheats'],
	['tarkov-cheat-download', 'wuthering-waves-cheat-download'],
	['tarkov-cheats-2026', 'wuthering-waves-cheats-2026'],
	['tarkov-radar-hack', 'wuthering-waves-teleport'],
	['tarkov-aimbot-hack', 'wuthering-waves-aimbot-hack'],
	['tarkov-esp-hack', 'wuthering-waves-esp-hack'],
	['tarkov-unlock-all', 'wuthering-waves-god-mode'],
	['tarkov-soft-aim', 'wuthering-waves-soft-aim'],
	['tarkov-mod-menu', 'wuthering-waves-mod-menu'],
	['tarkov-wallhack', 'wuthering-waves-wallhack'],
	['tarkov-cheats', 'wuthering-waves-cheats'],
	['tarkov-aimbot', 'wuthering-waves-aimbot'],
	['tarkov-esp', 'wuthering-waves-esp'],
	['battleye-bypass', 'wuthering-waves-anti-cheat'],
	["'battleye'", "'anti-cheat'"],
	['| battleye', '| anti-cheat'],
	['pageId="battleye"', 'pageId="anti-cheat"'],
	['pageId: \'battleye\'', "pageId: 'anti-cheat'"],
	['"battleye"', '"anti-cheat"'],
	['escape-from-tarkov-cheats', 'wuthering-waves-cheats'],
	['Escape from Tarkov', 'Wuthering Waves'],
	['Tarkov Cheats', 'Wuthering Waves Cheat'],
	['Tarkov cheats', 'Wuthering Waves cheats'],
	['Tarkov cheat', 'Wuthering Waves cheat'],
	['Tarkov hacks', 'Wuthering Waves hacks'],
	['Tarkov hack', 'Wuthering Waves hack'],
	['TarkovCheatsSite', 'WutheringWavesCheatSite'],
	['Tarkov Intel', 'Wuthering Waves Intel'],
	['BattlEye anti-cheat', 'Anti-Cheat protection'],
	['BattlEye maintenance', 'Anti-Cheat maintenance'],
	['BattlEye bypass', 'Anti-Cheat bypass'],
	['BattlEye Bypass', 'Anti-Cheat Bypass'],
	['BattlEye patches', 'game patches'],
	['BattlEye patch', 'game patch'],
	['BattlEye updates', 'game updates'],
	['BattlEye update', 'game update'],
	['after BattlEye', 'after game patches'],
	['BattlEye', 'Anti-Cheat'],
	['battleye', 'anti-cheat'],
	['tarkov cheats', 'wuthering waves cheats'],
	['tarkov hacks', 'wuthering waves hacks'],
	['tarkov hack', 'wuthering waves hack'],
	['tarkov cheat', 'wuthering waves cheat'],
	['Customs, Woods, and Streets of Tarkov', 'Huanglong, Jinzhou, and Rinascita'],
	['Customs, Woods et Streets of Tarkov', 'Huanglong, Jinzhou et Rinascita'],
	['Customs, Woods e Streets of Tarkov', 'Huanglong, Jinzhou e Rinascita'],
	['Customs, Woods und Streets of Tarkov', 'Huanglong, Jinzhou und Rinascita'],
	['extract fights', 'boss encounters'],
	['extract fight', 'boss encounter'],
	['raid rounds', 'combat sessions'],
	['PMC raids and Scav runs', 'open-world exploration and boss fights'],
	['PMC & Scav', 'Echo & Loot'],
	['PMC raids and Scav runs', 'open-world exploration'],
	['extract and loot markers', 'Echo, chest, and loot markers'],
	['high-value loot', 'Echo and chest loot'],
	['PMCs', 'enemies'],
	['Scav run', 'Echo hunt'],
	['scav run', 'echo hunt'],
	['extract timer', 'distance readout'],
	['tarkovImages', 'wutheringWavesImages'],
	["from './tarkov'", "from './wuthering-waves'"],
	["from '../data/tarkov'", "from '../data/wuthering-waves'"],
	["from '../../data/tarkov'", "from '../../data/wuthering-waves'"],
	['fetch-tarkov-images', 'fetch-wuthering-waves-images'],
	['tarkov-hack-overlays', 'wuthering-waves-hack-overlays'],
	['trucos-tarkov', 'trucos-wuthering-waves'],
	['triche-tarkov', 'triche-wuthering-waves'],
	['cheats-tarkov', 'cheats-wuthering-waves'],
	['trucchi-tarkov', 'trucchi-wuthering-waves'],
	['cheaty-tarkov', 'cheaty-wuthering-waves'],
	['chity-tarkov', 'chity-wuthering-waves'],
	['chitov-tarkov', 'chitov-wuthering-waves'],
	['chitiv-tarkov', 'chitiv-wuthering-waves'],
	['cheatow-tarkov', 'cheatow-wuthering-waves'],
	['hile-tarkov', 'hile-wuthering-waves'],
	['tarkov-hile', 'wuthering-waves-hile'],
	['Buy Tarkov Cheats', 'Buy Wuthering Waves Cheat'],
	['Tarkov', 'Wuthering Waves'],
	['tarkov', 'wuthering-waves'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-wuthering-waves.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'wuthering-waves.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → wuthering-waves.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'wuthering-waves-aimbot': 'wuthering-waves-aimbot',
		'wuthering-waves-esp': 'wuthering-waves-esp',
		'wuthering-waves-wallhack': 'wallhack',
		'wuthering-waves-teleport': 'teleport',
		'undetected-wuthering-waves-cheats': 'undetected',
		'wuthering-waves-cheats-2026': 'cheats-2026',
		'wuthering-waves-anti-cheat': 'anti-cheat',
		'wuthering-waves-cheats': 'hacks',
		'wuthering-waves-cheat-download': 'cheat-download',
		'wuthering-waves-mod-menu': 'mod-menu',
		'wuthering-waves-soft-aim': 'soft-aim',
		'best-wuthering-waves-cheats': 'best-cheats',
		'wuthering-waves-aimbot-hack': 'aimbot-hack',
		'wuthering-waves-esp-hack': 'esp-hack',
		'wuthering-waves-god-mode': 'god-mode',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Wuthering Waves Cheat (wutheringwavescheat.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await transformTextFiles();
	await updatePageAstroFiles();
	console.log('\nDone. Next: update brand.ts, images, npm run sync:brand, npm run build');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
