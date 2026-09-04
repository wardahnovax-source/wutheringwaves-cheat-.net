#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
const bad = [
	'supply-drop',
	'BR-critical',
	'BR loop',
	'vehicles',
	'ranked block',
	'Controllers',
	'Battle Pass',
	'reboot rounds',
	'endgame circles',
	'Verdansk',
	'Activision',
	'soft aim, and .',
	'ESP, Soft Aim,',
	'best-wuthering-waves-cheats',
	'wuthering-waves-esp-hack',
	'wuthering-waves-aimbot-hack',
];
console.log('--- pages-en leftovers ---');
for (const b of bad) {
	const n = pages.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const gen = readFileSync('src/data/i18n/content.generated.ts', 'utf8');
const enEnd = gen.indexOf('\n\t\tes:');
const en = enEnd > 0 ? gen.slice(0, enEnd) : gen.slice(0, 120000);
console.log('--- EN generated leftovers ---');
for (const b of [
	'supply-drop',
	'BR-critical',
	'full BR',
	'vehicles before',
	'Controllers',
	'Battle Pass',
	'RAnti-Cheat',
	'soft aim, and .',
	'best-wuthering-waves-cheats',
	'wuthering-waves-esp-hack',
]) {
	const n = en.split(b).length - 1;
	if (n) console.log(`${b}: ${n}`);
}

const blog = readFileSync('src/data/blog/posts.generated.ts', 'utf8');
const reps = [
	['V-Bucks', 'roubles'],
	['Item Shop', 'Flea Market'],
	['Battle Pass', 'wipe progression'],
	['FNCS', 'Wuthering Waves tournament'],
	['Hammer AR', 'M4A1'],
	['mythics', 'meta guns'],
	['island codes', 'offline practice maps'],
	['Creative 1v1s', 'aim training'],
	['creative 1v1s', 'aim training'],
	['Epic health', 'Battlestate status'],
	['Epic terms', 'Battlestate Games terms'],
	["Epic's Anti-Cheat", 'Anti-Cheat'],
	['Epic patch', 'Wuthering Waves patch'],
	['EliteFN', 'a Fortnite cheat shop'],
	['GhostWare', 'a slim cheat vendor'],
	['CheatVault', 'another cheat shop'],
	['/wuthering-waves-aimbot-hack/', '/wuthering-waves-aimbot/'],
	['/wuthering-waves-esp-hack/', '/wuthering-waves-esp/'],
	['/best-wuthering-waves-cheats/', '/wuthering-waves-cheats/'],
	['best Wuthering Waves cheats', 'Wuthering Waves cheats'],
	['hot drops', 'hot spawns'],
	['ranked grinders', 'raid grinders'],
	['before Ranked', 'before a raid'],
];
let s = blog;
let n = 0;
for (const [a, b] of reps) {
	if (s.includes(a)) {
		s = s.split(a).join(b);
		n += 1;
	}
}
writeFileSync('src/data/blog/posts.generated.ts', s);
console.log('blog patterns fixed:', n);
