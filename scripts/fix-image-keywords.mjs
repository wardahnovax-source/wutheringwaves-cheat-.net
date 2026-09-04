#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'wuthering waves cheats', espWallhack: 'wuthering waves cheats wallhack', aimbotCombat: 'wuthering waves cheats aimbot', squadFight: 'wuthering waves cheats', playerEsp: 'wuthering waves cheats esp', headerArt: 'wuthering waves cheats aimbot', cheatsPackage: 'wuthering waves cheats radar', rebootFight: 'wuthering waves cheats aimbot', battleRoyale: 'wuthering waves cheats', battleRoyaleIsland: 'wuthering waves cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Wuthering Waves ESP player tags hack'", "imageAlt: 'wuthering waves cheats esp'"],
	["imageAlt: 'Wuthering Waves ESP radar hack'", "imageAlt: 'wuthering waves cheats radar'"],
	["imageAlt: 'Wuthering Waves aimbot sniper kill'", "imageAlt: 'wuthering waves cheats aimbot'"],
	["imageAlt: 'Wuthering Waves aimbot skeleton targeting'", "imageAlt: 'wuthering waves cheats aimbot'"],
	["imageAlt: 'Wuthering Waves cheats ADS combat'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats setup PC activation'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats updates Anti-Cheat maintenance'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats FAQ ESP aimbot'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats support license help'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Undetected wuthering waves cheats ESP wallhack'", "imageAlt: 'undetected wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves wallhack skeleton ESP'", "imageAlt: 'wuthering waves cheats wallhack'"],
	["imageAlt: 'Anti-Cheat bypass wuthering-waves ESP aimbot'", "imageAlt: 'wuthering waves cheats anti-cheat'"],
	["imageAlt: 'Wuthering Waves cheats 2026 ESP aimbot'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats combat aimbot'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheat download ESP aimbot'", "imageAlt: 'wuthering waves cheats download'"],
	["imageAlt: 'Wuthering Waves mod menu ESP aimbot'", "imageAlt: 'wuthering waves cheats mod menu'"],
	["imageAlt: 'Wuthering Waves soft aim aimbot settings'", "imageAlt: 'wuthering waves cheats soft aim'"],
	["imageAlt: 'Best wuthering waves cheats 2026 ESP'", "imageAlt: 'best wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves aimbot hack combat'", "imageAlt: 'wuthering waves cheats aimbot'"],
	["imageAlt: 'Wuthering Waves ESP hack wallhack'", "imageAlt: 'wuthering waves cheats esp'"],
	["imageAlt: 'Wuthering Waves unlock all ESP aimbot guide'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats privacy policy'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats refund policy'", "imageAlt: 'wuthering waves cheats'"],
	["imageAlt: 'Wuthering Waves cheats terms of use'", "imageAlt: 'wuthering waves cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Wuthering Waves ${meta.altKeyword}`")
	.join("imageAlt: 'wuthering waves cheats'")
	.split("galleryTitle: `Wuthering Waves Cheat ${topicName}`")
	.join("galleryTitle: 'wuthering waves cheats'")
	.split("imageAlt: `Wuthering Waves cheats ${kind} policy`")
	.join("imageAlt: 'wuthering waves cheats'")
	.split("galleryTitle: `Wuthering Waves Cheat ${kind} resources`")
	.join("galleryTitle: 'wuthering waves cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
