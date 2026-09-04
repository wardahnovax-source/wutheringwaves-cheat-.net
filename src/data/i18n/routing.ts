import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'wuthering-waves-esp'
	| 'wuthering-waves-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'anti-cheat'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'wuthering-waves-esp': '/wuthering-waves-esp/',
	'wuthering-waves-aimbot': '/wuthering-waves-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-wuthering-waves-cheats/',
	wallhack: '/wuthering-waves-wallhack/',
	radar: '/wuthering-waves-teleport/',
	'anti-cheat': '/wuthering-waves-anti-cheat/',
	'cheats-2026': '/wuthering-waves-cheats-2026/',
	hacks: '/wuthering-waves-cheats/',
	'cheat-download': '/wuthering-waves-cheat-download/',
	'mod-menu': '/wuthering-waves-mod-menu/',
	'soft-aim': '/wuthering-waves-soft-aim/',
	'best-cheats': '/best-wuthering-waves-cheats/',
	'aimbot-hack': '/wuthering-waves-aimbot-hack/',
	'esp-hack': '/wuthering-waves-esp-hack/',
	'unlock-all': '/wuthering-waves-god-mode/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'wuthering-waves-esp': {
		en: 'wuthering-waves-esp',
		es: 'trucos-wuthering-waves-esp',
		fr: 'triche-wuthering-waves-esp',
		de: 'wuthering-waves-esp-wallhack',
		pt: 'cheats-wuthering-waves-esp',
		it: 'trucchi-wuthering-waves-esp',
		nl: 'wuthering-waves-esp-wallhack',
		pl: 'cheaty-wuthering-waves-esp',
		ru: 'wuthering-waves-esp-chity',
		tr: 'wuthering-waves-esp-hile',
		ar: 'wuthering-waves-esp-wallhack',
		ja: 'wuthering-waves-esp-wallhack',
		ko: 'wuthering-waves-esp-wallhack',
		zh: 'wuthering-waves-esp-wallhack',
		hi: 'wuthering-waves-esp-wallhack',
		id: 'wuthering-waves-esp-wallhack',
		th: 'wuthering-waves-esp-wallhack',
		vi: 'wuthering-waves-esp-wallhack',
		uk: 'wuthering-waves-esp-chity',
		cs: 'wuthering-waves-esp-wallhack',
		ro: 'wuthering-waves-esp-wallhack',
		sv: 'wuthering-waves-esp-wallhack',
	},
	'wuthering-waves-aimbot': {
		en: 'wuthering-waves-aimbot',
		es: 'trucos-wuthering-waves-aimbot',
		fr: 'triche-wuthering-waves-aimbot',
		de: 'wuthering-waves-aimbot',
		pt: 'cheats-wuthering-waves-aimbot',
		it: 'trucchi-wuthering-waves-aimbot',
		nl: 'wuthering-waves-aimbot',
		pl: 'cheaty-wuthering-waves-aimbot',
		ru: 'wuthering-waves-aimbot-chity',
		tr: 'wuthering-waves-aimbot-hile',
		ar: 'wuthering-waves-aimbot',
		ja: 'wuthering-waves-aimbot',
		ko: 'wuthering-waves-aimbot',
		zh: 'wuthering-waves-aimbot',
		hi: 'wuthering-waves-aimbot',
		id: 'wuthering-waves-aimbot',
		th: 'wuthering-waves-aimbot',
		vi: 'wuthering-waves-aimbot',
		uk: 'wuthering-waves-aimbot-chity',
		cs: 'wuthering-waves-aimbot',
		ro: 'wuthering-waves-aimbot',
		sv: 'wuthering-waves-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-wuthering-waves',
		fr: 'fonctionnalites-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-funktionen',
		pt: 'recursos-cheats-wuthering-waves',
		it: 'funzioni-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-functies',
		pl: 'funkcje-cheatow-wuthering-waves',
		ru: 'funkcii-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-ozellikleri',
		ar: 'escape-from-wuthering-waves-cheats-features',
		ja: 'escape-from-wuthering-waves-cheats-features',
		ko: 'escape-from-wuthering-waves-cheats-features',
		zh: 'escape-from-wuthering-waves-cheats-features',
		hi: 'escape-from-wuthering-waves-cheats-features',
		id: 'escape-from-wuthering-waves-cheats-features',
		th: 'escape-from-wuthering-waves-cheats-features',
		vi: 'escape-from-wuthering-waves-cheats-features',
		uk: 'funkcii-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-funkce',
		ro: 'functii-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-wuthering-waves',
		fr: 'prix-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-preise',
		pt: 'precos-cheats-wuthering-waves',
		it: 'prezzi-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-prijzen',
		pl: 'ceny-cheatow-wuthering-waves',
		ru: 'ceny-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-fiyatlari',
		ar: 'escape-from-wuthering-waves-cheats-pricing',
		ja: 'escape-from-wuthering-waves-cheats-pricing',
		ko: 'escape-from-wuthering-waves-cheats-pricing',
		zh: 'escape-from-wuthering-waves-cheats-pricing',
		hi: 'escape-from-wuthering-waves-cheats-pricing',
		id: 'escape-from-wuthering-waves-cheats-pricing',
		th: 'escape-from-wuthering-waves-cheats-pricing',
		vi: 'escape-from-wuthering-waves-cheats-pricing',
		uk: 'ciny-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-ceny',
		ro: 'preturi-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-wuthering-waves',
		fr: 'installation-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-installation',
		pt: 'instalacao-cheats-wuthering-waves',
		it: 'installazione-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-installatie',
		pl: 'instalacja-cheatow-wuthering-waves',
		ru: 'ustanovka-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-kurulum',
		ar: 'escape-from-wuthering-waves-cheats-setup',
		ja: 'escape-from-wuthering-waves-cheats-setup',
		ko: 'escape-from-wuthering-waves-cheats-setup',
		zh: 'escape-from-wuthering-waves-cheats-setup',
		hi: 'escape-from-wuthering-waves-cheats-setup',
		id: 'escape-from-wuthering-waves-cheats-setup',
		th: 'escape-from-wuthering-waves-cheats-setup',
		vi: 'escape-from-wuthering-waves-cheats-setup',
		uk: 'vstanovka-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-instalace',
		ro: 'instalare-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-wuthering-waves',
		fr: 'mises-a-jour-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-updates',
		pt: 'atualizacoes-cheats-wuthering-waves',
		it: 'aggiornamenti-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-updates',
		pl: 'aktualizacje-cheatow-wuthering-waves',
		ru: 'obnovleniya-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-guncellemeleri',
		ar: 'escape-from-wuthering-waves-cheats-updates',
		ja: 'escape-from-wuthering-waves-cheats-updates',
		ko: 'escape-from-wuthering-waves-cheats-updates',
		zh: 'escape-from-wuthering-waves-cheats-updates',
		hi: 'escape-from-wuthering-waves-cheats-updates',
		id: 'escape-from-wuthering-waves-cheats-updates',
		th: 'escape-from-wuthering-waves-cheats-updates',
		vi: 'escape-from-wuthering-waves-cheats-updates',
		uk: 'onovlennya-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-aktualizace',
		ro: 'actualizari-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-wuthering-waves',
		fr: 'faq-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-faq',
		pt: 'faq-cheats-wuthering-waves',
		it: 'faq-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-faq',
		pl: 'faq-cheatow-wuthering-waves',
		ru: 'faq-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-sss',
		ar: 'escape-from-wuthering-waves-cheats-faq',
		ja: 'escape-from-wuthering-waves-cheats-faq',
		ko: 'escape-from-wuthering-waves-cheats-faq',
		zh: 'escape-from-wuthering-waves-cheats-faq',
		hi: 'escape-from-wuthering-waves-cheats-faq',
		id: 'escape-from-wuthering-waves-cheats-faq',
		th: 'escape-from-wuthering-waves-cheats-faq',
		vi: 'escape-from-wuthering-waves-cheats-faq',
		uk: 'faq-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-faq',
		ro: 'faq-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-wuthering-waves',
		fr: 'support-triche-wuthering-waves',
		de: 'escape-from-wuthering-waves-cheats-support',
		pt: 'suporte-cheats-wuthering-waves',
		it: 'supporto-trucchi-wuthering-waves',
		nl: 'escape-from-wuthering-waves-cheats-support',
		pl: 'wsparcie-cheatow-wuthering-waves',
		ru: 'podderzhka-chitov-wuthering-waves',
		tr: 'wuthering-waves-hile-destek',
		ar: 'escape-from-wuthering-waves-cheats-support',
		ja: 'escape-from-wuthering-waves-cheats-support',
		ko: 'escape-from-wuthering-waves-cheats-support',
		zh: 'escape-from-wuthering-waves-cheats-support',
		hi: 'escape-from-wuthering-waves-cheats-support',
		id: 'escape-from-wuthering-waves-cheats-support',
		th: 'escape-from-wuthering-waves-cheats-support',
		vi: 'escape-from-wuthering-waves-cheats-support',
		uk: 'pidtrymka-chitiv-wuthering-waves',
		cs: 'escape-from-wuthering-waves-cheats-podpora',
		ro: 'suport-cheats-wuthering-waves',
		sv: 'escape-from-wuthering-waves-cheats-support',
	},
	undetected: {
		en: 'undetected-wuthering-waves-cheats',
		es: 'trucos-wuthering-waves-indetectables',
		fr: 'triche-wuthering-waves-indetectable',
		de: 'unentdeckte-escape-from-wuthering-waves-cheats',
		pt: 'cheats-wuthering-waves-indetectaveis',
		it: 'trucchi-wuthering-waves-indetectabili',
		nl: 'undetected-wuthering-waves-cheats',
		pl: 'niewykrywalne-cheats-wuthering-waves',
		ru: 'nedecektiruemye-chity-wuthering-waves',
		tr: 'tespit-edilemeyen-wuthering-waves-hileleri',
		ar: 'undetected-wuthering-waves-cheats',
		ja: 'undetected-wuthering-waves-cheats',
		ko: 'undetected-wuthering-waves-cheats',
		zh: 'undetected-wuthering-waves-cheats',
		hi: 'undetected-wuthering-waves-cheats',
		id: 'undetected-wuthering-waves-cheats',
		th: 'undetected-wuthering-waves-cheats',
		vi: 'undetected-wuthering-waves-cheats',
		uk: 'nedecektovani-chity-wuthering-waves',
		cs: 'undetected-wuthering-waves-cheats',
		ro: 'cheats-wuthering-waves-nedetectabile',
		sv: 'undetected-wuthering-waves-cheats',
	},
	wallhack: {
		en: 'wuthering-waves-wallhack',
		es: 'wallhack-trucos-wuthering-waves',
		fr: 'wallhack-triche-wuthering-waves',
		de: 'wuthering-waves-wallhack',
		pt: 'wallhack-cheats-wuthering-waves',
		it: 'wallhack-trucchi-wuthering-waves',
		nl: 'wuthering-waves-wallhack',
		pl: 'wallhack-cheatow-wuthering-waves',
		ru: 'wallhack-chity-wuthering-waves',
		tr: 'wuthering-waves-wallhack-hile',
		ar: 'wuthering-waves-wallhack',
		ja: 'wuthering-waves-wallhack',
		ko: 'wuthering-waves-wallhack',
		zh: 'wuthering-waves-wallhack',
		hi: 'wuthering-waves-wallhack',
		id: 'wuthering-waves-wallhack',
		th: 'wuthering-waves-wallhack',
		vi: 'wuthering-waves-wallhack',
		uk: 'wallhack-chity-wuthering-waves',
		cs: 'wuthering-waves-wallhack',
		ro: 'wallhack-cheats-wuthering-waves',
		sv: 'wuthering-waves-wallhack',
	},
	radar: {
		en: 'wuthering-waves-teleport',
		es: 'radar-hack-trucos-wuthering-waves',
		fr: 'radar-hack-triche-wuthering-waves',
		de: 'wuthering-waves-teleport',
		pt: 'radar-hack-cheats-wuthering-waves',
		it: 'radar-hack-trucchi-wuthering-waves',
		nl: 'wuthering-waves-teleport',
		pl: 'radar-hack-cheatow-wuthering-waves',
		ru: 'radar-hack-chity-wuthering-waves',
		tr: 'wuthering-waves-teleport',
		ar: 'wuthering-waves-teleport',
		ja: 'wuthering-waves-teleport',
		ko: 'wuthering-waves-teleport',
		zh: 'wuthering-waves-teleport',
		hi: 'wuthering-waves-teleport',
		id: 'wuthering-waves-teleport',
		th: 'wuthering-waves-teleport',
		vi: 'wuthering-waves-teleport',
		uk: 'radar-hack-chity-wuthering-waves',
		cs: 'wuthering-waves-teleport',
		ro: 'radar-hack-cheats-wuthering-waves',
		sv: 'wuthering-waves-teleport',
	},
	'anti-cheat': {
		en: 'wuthering-waves-anti-cheat',
		es: 'wuthering-waves-anti-cheat-trucos',
		fr: 'wuthering-waves-anti-cheat-triche',
		de: 'wuthering-waves-anti-cheat',
		pt: 'wuthering-waves-anti-cheat-cheats',
		it: 'wuthering-waves-anti-cheat-trucchi',
		nl: 'wuthering-waves-anti-cheat',
		pl: 'wuthering-waves-anti-cheat-cheatow',
		ru: 'wuthering-waves-anti-cheat-chity',
		tr: 'wuthering-waves-anti-cheat',
		ar: 'wuthering-waves-anti-cheat',
		ja: 'wuthering-waves-anti-cheat',
		ko: 'wuthering-waves-anti-cheat',
		zh: 'wuthering-waves-anti-cheat',
		hi: 'wuthering-waves-anti-cheat',
		id: 'wuthering-waves-anti-cheat',
		th: 'wuthering-waves-anti-cheat',
		vi: 'wuthering-waves-anti-cheat',
		uk: 'wuthering-waves-anti-cheat-chity',
		cs: 'wuthering-waves-anti-cheat',
		ro: 'wuthering-waves-anti-cheat-cheats',
		sv: 'wuthering-waves-anti-cheat',
	},
	'cheats-2026': {
		en: 'wuthering-waves-cheats-2026',
		es: 'trucos-wuthering-waves-2026',
		fr: 'triche-wuthering-waves-2026',
		de: 'wuthering-waves-cheats-2026',
		pt: 'cheats-wuthering-waves-2026',
		it: 'trucchi-wuthering-waves-2026',
		nl: 'wuthering-waves-cheats-2026',
		pl: 'cheaty-wuthering-waves-2026',
		ru: 'chity-wuthering-waves-2026',
		tr: 'wuthering-waves-hileleri-2026',
		ar: 'wuthering-waves-cheats-2026',
		ja: 'wuthering-waves-cheats-2026',
		ko: 'wuthering-waves-cheats-2026',
		zh: 'wuthering-waves-cheats-2026',
		hi: 'wuthering-waves-cheats-2026',
		id: 'wuthering-waves-cheats-2026',
		th: 'wuthering-waves-cheats-2026',
		vi: 'wuthering-waves-cheats-2026',
		uk: 'chity-wuthering-waves-2026',
		cs: 'wuthering-waves-cheats-2026',
		ro: 'cheats-wuthering-waves-2026',
		sv: 'wuthering-waves-cheats-2026',
	},
	hacks: {
		en: 'wuthering-waves-cheats',
		es: 'hacks-trucos-wuthering-waves',
		fr: 'hacks-triche-wuthering-waves',
		de: 'wuthering-waves-cheats',
		pt: 'hacks-cheats-wuthering-waves',
		it: 'hacks-trucchi-wuthering-waves',
		nl: 'wuthering-waves-cheats',
		pl: 'hacks-cheatow-wuthering-waves',
		ru: 'haksy-chity-wuthering-waves',
		tr: 'wuthering-waves-hile-hacks',
		ar: 'wuthering-waves-cheats',
		ja: 'wuthering-waves-cheats',
		ko: 'wuthering-waves-cheats',
		zh: 'wuthering-waves-cheats',
		hi: 'wuthering-waves-cheats',
		id: 'wuthering-waves-cheats',
		th: 'wuthering-waves-cheats',
		vi: 'wuthering-waves-cheats',
		uk: 'haksy-chity-wuthering-waves',
		cs: 'wuthering-waves-cheats',
		ro: 'hacks-cheats-wuthering-waves',
		sv: 'wuthering-waves-cheats',
	},
	'cheat-download': {
		en: 'wuthering-waves-cheat-download',
		es: 'descarga-trucos-wuthering-waves',
		fr: 'telechargement-triche-wuthering-waves',
		de: 'wuthering-waves-cheat-download',
		pt: 'download-cheats-wuthering-waves',
		it: 'download-trucchi-wuthering-waves',
		nl: 'wuthering-waves-cheat-download',
		pl: 'pobieranie-cheatow-wuthering-waves',
		ru: 'skachat-chity-wuthering-waves',
		tr: 'wuthering-waves-hile-indir',
		ar: 'wuthering-waves-cheat-download',
		ja: 'wuthering-waves-cheat-download',
		ko: 'wuthering-waves-cheat-download',
		zh: 'wuthering-waves-cheat-download',
		hi: 'wuthering-waves-cheat-download',
		id: 'wuthering-waves-cheat-download',
		th: 'wuthering-waves-cheat-download',
		vi: 'wuthering-waves-cheat-download',
		uk: 'zavantazhennya-chitiv-wuthering-waves',
		cs: 'wuthering-waves-cheat-download',
		ro: 'descarcare-cheats-wuthering-waves',
		sv: 'wuthering-waves-cheat-download',
	},
	'mod-menu': {
		en: 'wuthering-waves-mod-menu',
		es: 'menu-mod-trucos-wuthering-waves',
		fr: 'menu-mod-triche-wuthering-waves',
		de: 'wuthering-waves-mod-menu',
		pt: 'menu-mod-cheats-wuthering-waves',
		it: 'menu-mod-trucchi-wuthering-waves',
		nl: 'wuthering-waves-mod-menu',
		pl: 'menu-mod-cheatow-wuthering-waves',
		ru: 'mod-menu-chity-wuthering-waves',
		tr: 'wuthering-waves-mod-menu',
		ar: 'wuthering-waves-mod-menu',
		ja: 'wuthering-waves-mod-menu',
		ko: 'wuthering-waves-mod-menu',
		zh: 'wuthering-waves-mod-menu',
		hi: 'wuthering-waves-mod-menu',
		id: 'wuthering-waves-mod-menu',
		th: 'wuthering-waves-mod-menu',
		vi: 'wuthering-waves-mod-menu',
		uk: 'mod-menu-chity-wuthering-waves',
		cs: 'wuthering-waves-mod-menu',
		ro: 'meniu-mod-cheats-wuthering-waves',
		sv: 'wuthering-waves-mod-menu',
	},
	'soft-aim': {
		en: 'wuthering-waves-soft-aim',
		es: 'soft-aim-trucos-wuthering-waves',
		fr: 'soft-aim-triche-wuthering-waves',
		de: 'wuthering-waves-soft-aim',
		pt: 'soft-aim-cheats-wuthering-waves',
		it: 'soft-aim-trucchi-wuthering-waves',
		nl: 'wuthering-waves-soft-aim',
		pl: 'soft-aim-cheatow-wuthering-waves',
		ru: 'soft-aim-chity-wuthering-waves',
		tr: 'wuthering-waves-soft-aim',
		ar: 'wuthering-waves-soft-aim',
		ja: 'wuthering-waves-soft-aim',
		ko: 'wuthering-waves-soft-aim',
		zh: 'wuthering-waves-soft-aim',
		hi: 'wuthering-waves-soft-aim',
		id: 'wuthering-waves-soft-aim',
		th: 'wuthering-waves-soft-aim',
		vi: 'wuthering-waves-soft-aim',
		uk: 'soft-aim-chity-wuthering-waves',
		cs: 'wuthering-waves-soft-aim',
		ro: 'soft-aim-cheats-wuthering-waves',
		sv: 'wuthering-waves-soft-aim',
	},
	'best-cheats': {
		en: 'best-wuthering-waves-cheats',
		es: 'mejores-trucos-wuthering-waves',
		fr: 'meilleures-triches-wuthering-waves',
		de: 'beste-escape-from-wuthering-waves-cheats',
		pt: 'melhores-cheats-wuthering-waves',
		it: 'migliori-trucchi-wuthering-waves',
		nl: 'beste-escape-from-wuthering-waves-cheats',
		pl: 'najlepsze-cheats-wuthering-waves',
		ru: 'luchshie-chity-wuthering-waves',
		tr: 'en-iyi-wuthering-waves-hileleri',
		ar: 'best-wuthering-waves-cheats',
		ja: 'best-wuthering-waves-cheats',
		ko: 'best-wuthering-waves-cheats',
		zh: 'best-wuthering-waves-cheats',
		hi: 'best-wuthering-waves-cheats',
		id: 'best-wuthering-waves-cheats',
		th: 'best-wuthering-waves-cheats',
		vi: 'best-wuthering-waves-cheats',
		uk: 'naykrashchi-chity-wuthering-waves',
		cs: 'nejlepsi-escape-from-wuthering-waves-cheats',
		ro: 'cele-mai-bune-cheats-wuthering-waves',
		sv: 'basta-escape-from-wuthering-waves-cheats',
	},
	'aimbot-hack': {
		en: 'wuthering-waves-aimbot-hack',
		es: 'aimbot-hack-trucos-wuthering-waves',
		fr: 'aimbot-hack-triche-wuthering-waves',
		de: 'wuthering-waves-aimbot-hack',
		pt: 'aimbot-hack-cheats-wuthering-waves',
		it: 'aimbot-hack-trucchi-wuthering-waves',
		nl: 'wuthering-waves-aimbot-hack',
		pl: 'aimbot-hack-cheatow-wuthering-waves',
		ru: 'aimbot-hack-chity-wuthering-waves',
		tr: 'wuthering-waves-aimbot-hack',
		ar: 'wuthering-waves-aimbot-hack',
		ja: 'wuthering-waves-aimbot-hack',
		ko: 'wuthering-waves-aimbot-hack',
		zh: 'wuthering-waves-aimbot-hack',
		hi: 'wuthering-waves-aimbot-hack',
		id: 'wuthering-waves-aimbot-hack',
		th: 'wuthering-waves-aimbot-hack',
		vi: 'wuthering-waves-aimbot-hack',
		uk: 'aimbot-hack-chity-wuthering-waves',
		cs: 'wuthering-waves-aimbot-hack',
		ro: 'aimbot-hack-cheats-wuthering-waves',
		sv: 'wuthering-waves-aimbot-hack',
	},
	'esp-hack': {
		en: 'wuthering-waves-esp-hack',
		es: 'esp-hack-trucos-wuthering-waves',
		fr: 'esp-hack-triche-wuthering-waves',
		de: 'wuthering-waves-esp-hack',
		pt: 'esp-hack-cheats-wuthering-waves',
		it: 'esp-hack-trucchi-wuthering-waves',
		nl: 'wuthering-waves-esp-hack',
		pl: 'esp-hack-cheatow-wuthering-waves',
		ru: 'esp-hack-chity-wuthering-waves',
		tr: 'wuthering-waves-esp-hack',
		ar: 'wuthering-waves-esp-hack',
		ja: 'wuthering-waves-esp-hack',
		ko: 'wuthering-waves-esp-hack',
		zh: 'wuthering-waves-esp-hack',
		hi: 'wuthering-waves-esp-hack',
		id: 'wuthering-waves-esp-hack',
		th: 'wuthering-waves-esp-hack',
		vi: 'wuthering-waves-esp-hack',
		uk: 'esp-hack-chity-wuthering-waves',
		cs: 'wuthering-waves-esp-hack',
		ro: 'esp-hack-cheats-wuthering-waves',
		sv: 'wuthering-waves-esp-hack',
	},
	'unlock-all': {
		en: 'wuthering-waves-god-mode',
		es: 'unlock-all-trucos-wuthering-waves',
		fr: 'unlock-all-triche-wuthering-waves',
		de: 'wuthering-waves-god-mode',
		pt: 'unlock-all-cheats-wuthering-waves',
		it: 'unlock-all-trucchi-wuthering-waves',
		nl: 'wuthering-waves-god-mode',
		pl: 'unlock-all-cheatow-wuthering-waves',
		ru: 'unlock-all-chity-wuthering-waves',
		tr: 'wuthering-waves-god-mode',
		ar: 'wuthering-waves-god-mode',
		ja: 'wuthering-waves-god-mode',
		ko: 'wuthering-waves-god-mode',
		zh: 'wuthering-waves-god-mode',
		hi: 'wuthering-waves-god-mode',
		id: 'wuthering-waves-god-mode',
		th: 'wuthering-waves-god-mode',
		vi: 'wuthering-waves-god-mode',
		uk: 'unlock-all-chity-wuthering-waves',
		cs: 'wuthering-waves-god-mode',
		ro: 'unlock-all-cheats-wuthering-waves',
		sv: 'wuthering-waves-god-mode',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('wuthering-waves-aimbot', locale), pageId: 'wuthering-waves-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('wuthering-waves-esp', locale), pageId: 'wuthering-waves-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
