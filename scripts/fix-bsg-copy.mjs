#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Anti-Cheat security'],
	['Activision Status', 'Wuthering Waves Support'],
	['Activision Wuthering Waves', 'Wuthering Waves'],
	['Activision Support', 'Wuthering Waves Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromwuthering-waves.com/support'],
	['www.epicgames.com/wuthering-waves', 'www.escapefromwuthering-waves.com'],
	['www.wuthering-waves.com/competitive', 'www.escapefromwuthering-waves.com'],
	['https://www.wuthering-waves.com/', 'https://www.escapefromwuthering-waves.com/'],
	['Wuthering Waves.com', 'Wuthering Waves'],
	['Wuthering Waves Competitive', 'Wuthering Waves'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
