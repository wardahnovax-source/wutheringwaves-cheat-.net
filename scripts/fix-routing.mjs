#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Wuthering Waves source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['wuthering-waves-esp', 'wuthering-waves-esp'],
	['wuthering-waves-aimbot', 'wuthering-waves-aimbot'],
	['anti-cheat', 'anti-cheat'],
	['undetected-wuthering-waves-cheats', 'undetected-wuthering-waves-cheats'],
	['wuthering-waves-wallhack', 'wuthering-waves-wallhack'],
	['wuthering-waves-teleport', 'wuthering-waves-teleport'],
	['wuthering-waves-cheats-2026', 'wuthering-waves-cheats-2026'],
	['wuthering-waves-anti-cheat', 'wuthering-waves-anti-cheat'],
	['wutheringwavescheat.net', 'wutheringwavescheat.net'],
	['trucos-wuthering-waves', 'trucos-wuthering-waves'],
	['triche-wuthering-waves', 'triche-wuthering-waves'],
	['wuthering-waves-cheats', 'escape-from-wuthering-waves-cheats'],
	['cheats-wuthering-waves', 'cheats-wuthering-waves'],
	['trucchi-wuthering-waves', 'trucchi-wuthering-waves'],
	['cheaty-wuthering-waves', 'cheaty-wuthering-waves'],
	['chity-wuthering-waves', 'chity-wuthering-waves'],
	['chitov-wuthering-waves', 'chitov-wuthering-waves'],
	['chitiv-wuthering-waves', 'chitiv-wuthering-waves'],
	['cheatow-wuthering-waves', 'cheatow-wuthering-waves'],
	['hile-wuthering-waves', 'hile-wuthering-waves'],
	['wuthering-waves-hile', 'wuthering-waves-hile'],
	['wuthering-waves-esp-chity', 'wuthering-waves-esp-chity'],
	['wuthering-waves-aimbot-chity', 'wuthering-waves-aimbot-chity'],
	['unentdeckte-wuthering-waves-cheats', 'unentdeckte-escape-from-wuthering-waves-cheats'],
	['cheats-wuthering-waves-indetectaveis', 'cheats-wuthering-waves-indetectaveis'],
	['trucchi-wuthering-waves-indetectabili', 'trucchi-wuthering-waves-indetectabili'],
	['niewykrywalne-cheats-wuthering-waves', 'niewykrywalne-cheats-wuthering-waves'],
	['nedecektiruemye-chity-wuthering-waves', 'nedecektiruemye-chity-wuthering-waves'],
	['tespit-edilemeyen-wuthering-waves-hileleri', 'tespit-edilemeyen-wuthering-waves-hileleri'],
	['nedecektovani-chity-wuthering-waves', 'nedecektovani-chity-wuthering-waves'],
	['cheats-wuthering-waves-nedetectabile', 'cheats-wuthering-waves-nedetectabile'],
	['basta-wuthering-waves-cheats', 'basta-escape-from-wuthering-waves-cheats'],
	['wuthering-waves-anti-cheat-trucos-wuthering-waves', 'wuthering-waves-anti-cheat-trucos-wuthering-waves'],
	['wuthering-waves-anti-cheat-triche-wuthering-waves', 'wuthering-waves-anti-cheat-triche-wuthering-waves'],
	['wuthering-waves-anti-cheat-cheats-wuthering-waves', 'wuthering-waves-anti-cheat-cheats-wuthering-waves'],
	['wuthering-waves-anti-cheat-chity-wuthering-waves', 'wuthering-waves-anti-cheat-chity-wuthering-waves'],
	['wuthering-waves-anti-cheat-wuthering-waves', 'wuthering-waves-anti-cheat'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix anti-cheat key in englishPaths
	content = content.replace(/\tanti-cheat: '/, "\t'anti-cheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-wuthering-waves-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-wuthering-waves-cheats-hero.webp',
	'wuthering-waves-esp': '/images/escape-from-wuthering-waves-cheats-esp-wallhack.webp',
	'wuthering-waves-aimbot': '/images/escape-from-wuthering-waves-cheats-aimbot-combat.webp',
	features: '/images/escape-from-wuthering-waves-cheats-package.webp',
	pricing: '/images/escape-from-wuthering-waves-cheats-cover.webp',
	setup: '/images/wuthering-waves-loadout-builder.webp',
	updates: '/images/wuthering-waves-header-art.webp',
	faq: '/images/wuthering-waves-squad-fight.webp',
	support: '/images/escape-from-wuthering-waves-cheats-package.webp',
	undetected: '/images/wuthering-waves-battle-royale-combat.webp',
	wallhack: '/images/escape-from-wuthering-waves-cheats-esp-wallhack.webp',
	radar: '/images/wuthering-waves-player-esp.webp',
	'anti-cheat': '/images/wuthering-waves-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-wuthering-waves-cheats-hero.webp',
	privacy: '/images/escape-from-wuthering-waves-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-wuthering-waves-cheats-cover.webp',
	terms: '/images/escape-from-wuthering-waves-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'wuthering-waves-esp', 'wuthering-waves-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anti-cheat',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'wuthering-waves-esp' | 'wuthering-waves-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
