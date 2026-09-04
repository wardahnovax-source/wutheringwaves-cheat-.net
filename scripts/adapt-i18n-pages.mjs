#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Wuthering Waves source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['wuthering-waves-esp', 'wuthering-waves-esp'],
	['wuthering-waves-aimbot', 'wuthering-waves-aimbot'],
	["'anti-cheat'", "'anti-cheat'"],
	['wuthering-waves-anti-cheat', 'wuthering-waves-anti-cheat'],
	['undetected-wuthering-waves-cheats', 'undetected-wuthering-waves-cheats'],
	['wuthering-waves-wallhack', 'wuthering-waves-wallhack'],
	['wuthering-waves-teleport', 'wuthering-waves-teleport'],
	['wuthering-waves-cheats-2026', 'wuthering-waves-cheats-2026'],
	['escape-from-wuthering-waves-cheats', 'escape-from-wuthering-waves-cheats'],
	['escape-from-wuthering-waves', 'wuthering-waves'],
	['Wuthering Waves', 'Wuthering Waves'],
	['Wuthering Waves', 'Wuthering Waves'],
	['Wuthering Waves Cheat', 'Wuthering Waves Cheat'],
	['Wuthering Waves cheats', 'Wuthering Waves cheats'],
	['Wuthering Waves cheat', 'Wuthering Waves cheat'],
	['Wuthering Waves ESP', 'Wuthering Waves ESP'],
	['Wuthering Waves Aimbot', 'Wuthering Waves Aimbot'],
	['Wuthering Waves wallhack', 'Wuthering Waves wallhack'],
	['Wuthering Waves radar', 'Wuthering Waves radar'],
	['Wuthering Waves firefights', 'Wuthering Waves firefights'],
	['Wuthering Waves combat', 'Wuthering Waves combat'],
	['Wuthering Waves patches', 'Wuthering Waves patches'],
	['Wuthering Waves updates', 'Wuthering Waves updates'],
	['Wuthering Waves setup', 'Wuthering Waves setup'],
	['Wuthering Waves license', 'Wuthering Waves license'],
	['Wuthering Waves licenses', 'Wuthering Waves licenses'],
	['Wuthering Waves sessions', 'Wuthering Waves sessions'],
	['in Wuthering Waves', 'in Wuthering Waves'],
	['for Wuthering Waves', 'for Wuthering Waves'],
	['Wuthering Waves on', 'Wuthering Waves on'],
	['Wuthering Waves or', 'Wuthering Waves or'],
	['Wuthering Waves\'s', 'Wuthering Waves\'s'],
	['Wuthering Waves ', 'Wuthering Waves '],
	['Anti-Cheat protection', 'Anti-Cheat protection'],
	['Anti-Cheat maintenance', 'Anti-Cheat maintenance'],
	['Anti-Cheat bypass', 'Anti-Cheat bypass'],
	['Anti-Cheat Bypass', 'Anti-Cheat Bypass'],
	['Anti-Cheat', 'Anti-Cheat protection'],
	['anti-cheat', 'anti-cheat'],
	['support@wutheringwavescheat.net', 'support@wutheringwavescheat.net'],
	['Huanglong, Jinzhou, and Rinascita', 'Huanglong, Jinzhou, and Rinascita'],
	['Customs, Woods and Streets of Wuthering Waves', 'Customs, Woods and Streets of Wuthering Waves'],
	['boss encounters', 'boss encounters'],
	['boss encounter', 'boss encounter'],
	['combat sessions', 'combat sessions'],
	['extract', 'extract'],
	['enemies', 'players'],
	['operator', 'player'],
	['enemies', 'Players'],
	['Operator', 'Player'],
	['distance readout', 'distance readout'],
	['open-world exploration and boss fights', 'open-world exploration and boss fights'],
	['open-world exploration and boss fights', 'open-world exploration and boss fights'],
	['Echo & Loot', 'Echo & Loot'],
	['Echo and chest loot', 'Echo and chest loot'],
	['Echo and chest loot', 'Echo and chest loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Wuthering Waves combat pace'],
	['COD', 'Wuthering Waves'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Wuthering Waves Cheat',
	game: 'Wuthering Waves',
	checkout: 'Zadeyo',
	'anti-cheat': 'Anti-Cheat protection',
};`,
);
phrases = phrases.replace(/KW\.anti-cheat/g, 'KW.anti-cheat');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Huanglong, Jinzhou, and Rinascita'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
