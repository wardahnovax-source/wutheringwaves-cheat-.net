#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Wuthering Waves Cheat', 'Wuthering Waves Cheat'],
	['Wuthering Waves cheats', 'Wuthering Waves cheats'],
	['Wuthering Waves Cheat', 'Wuthering Waves Cheat'],
	['Wuthering Waves', 'Wuthering Waves'],
	['Wuthering Waves', 'Wuthering Waves'],
	['Call of Duty', 'Wuthering Waves'],
	['Wuthering Waves PC', 'Wuthering Waves PC'],
	['for Wuthering Waves', 'for Wuthering Waves'],
	['Wuthering Waves ', 'Wuthering Waves '],
	['wuthering-waves ', 'wuthering-waves '],
	['Anti-Cheat maintenance', 'Anti-Cheat maintenance'],
	['Anti-Cheat protection', 'Anti-Cheat protection'],
	['Anti-Cheat', 'Anti-Cheat protection'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['enemies', 'players'],
	['operator', 'player'],
	['enemies', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['wutheringwavescheat.net', 'wutheringwavescheat.net'],
	['Trucos Wuthering Waves', 'Trucos Wuthering Waves'],
	['Triches Wuthering Waves', 'Triches Wuthering Waves'],
	['Cheats Wuthering Waves', 'Cheats Wuthering Waves'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en anti-cheat key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tanti-cheat: \{/, "\t'anti-cheat': {");
pagesEn = pagesEn.replace(/Wuthering Waves Wuthering Waves/g, 'Wuthering Waves');
pagesEn = pagesEn.replace(/for Wuthering Waves Wuthering Waves/g, 'for Wuthering Waves');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'anti-cheat'/g, "'anti-cheat'");
pagesI18n = pagesI18n.replace(/anti-cheat:/g, "'anti-cheat':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
