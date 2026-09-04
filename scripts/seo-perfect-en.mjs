#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromwuthering-waves.com)
	['published by ${EXT.activision}', 'published by Battlestate Games (${EXT.wuthering-waves})'],
	['from ${EXT.activision}', 'from ${EXT.wuthering-waves}'],
	['via ${EXT.activision}', 'via ${EXT.wuthering-waves}'],
	['belong with ${EXT.activision}', 'belong with Battlestate Games'],
	['${EXT.activision} terms', 'Battlestate Games terms'],
	['${EXT.activision} season updates', '${EXT.wuthering-waves} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Wuthering Waves
	['vehicles, loot', 'enemies, Scavs, loot'],
	['notice vehicles before they push your position', 'spot enemies and Scavs before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, extract cues, and loot pins so only raid-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and extract awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and extract awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'Echo and chest loot worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'enemies, Scavs, and loot'],
	['players, loot, vehicles', 'enemies, Scavs, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full raid loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'raid-critical'],
	['endgame circles', 'extract holds'],
	['final circles', 'late-raid extracts'],
	['final-circle scrims', 'extract camp fights'],
	['before your first ranked block', 'before your first raid'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every raid',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'enemies, Scavs, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and extracts'],

	// Broken / truncated meta fragments
	['soft aim, and .', 'soft aim, and radar.'],
	['soft aim, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['soft aim, and for Windows PC', 'soft aim, and radar for Windows PC'],
	['soft aim, and in our', 'soft aim, and radar in our'],
	['soft aim, and maintenance', 'soft aim, and radar maintenance'],
	['soft aim, boxes, and on Windows PC', 'soft aim, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['RAnti-Cheat out for', 'Reach out for'],
	['an Anti-Cheat', 'a Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['wuthering waves cheats & wuthering waves cheats', 'wuthering waves cheats'],
	[
		'covering both wuthering waves cheats and wuthering waves cheats search intent',
		'covering both “wuthering waves cheats” and “escape from wuthering waves cheats” search intent',
	],
	[
		'also searched as wuthering waves cheats and wuthering waves cheat.',
		'built for Wuthering Waves on Windows PC.',
	],
	[
		'Wuthering Waves cheats vs wuthering waves cheats — same stack, clear pages',
		'How this Wuthering Waves cheats pillar fits nearby pages',
	],
	[
		'Searchers use wuthering waves cheats and wuthering waves cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/wuthering-waves-esp-hack/', '/wuthering-waves-esp/'],
	['/wuthering-waves-aimbot-hack/', '/wuthering-waves-aimbot/'],
	['/best-wuthering-waves-cheats/', '/wuthering-waves-cheats/'],
	['best Wuthering Waves cheats guide', 'Wuthering Waves cheats pillar'],
	['best Wuthering Waves cheats checklist', 'Wuthering Waves cheats checklist'],
	['best Wuthering Waves cheats', 'Wuthering Waves cheats'],
	[
		'Prefer softer tracking? Read the <a href="/wuthering-waves-soft-aim/">soft aim guide</a>. Want the search term most players use? See <a href="/wuthering-waves-aimbot/">aimbot hack</a>.',
		'Prefer softer tracking? Read the <a href="/wuthering-waves-soft-aim/">soft aim guide</a>.',
	],
	['Related landings: <a href="/wuthering-waves-cheat-download/">cheat download</a>, <a href="/wuthering-waves-mod-menu/">mod menu</a>, <a href="/wuthering-waves-aimbot/">aimbot hack</a>, <a href="/wuthering-waves-esp/">ESP hack</a>.',
		'Related landings: <a href="/wuthering-waves-cheat-download/">cheat download</a>, <a href="/wuthering-waves-mod-menu/">mod menu</a>, <a href="/wuthering-waves-aimbot/">aimbot</a>, <a href="/wuthering-waves-esp/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
