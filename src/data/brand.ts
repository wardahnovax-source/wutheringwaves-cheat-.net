/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Wuthering Waves Cheat',
	/** Short product label if needed */
	shortName: 'Wuthering Waves',
	/** Canonical origin — no trailing slash */
	url: 'https://wutheringwavescheat.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@wutheringwavescheat.net',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fwuthering-waves',

	/** Game this template instance targets */
	game: 'Wuthering Waves',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Anti-Cheat',

	logo: '/images/wuthering-waves-cheat-logo.webp',
	logoRaster: '/images/wuthering-waves-cheat-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Wuthering Waves Cheat logo',
	defaultOgImage: '/images/wuthering-waves-cheat-hero-1536w.webp',
	heroImage: '/images/wuthering-waves-cheat-hero-1536w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — sky cyan / teal from hero art + charcoal contrast.
	 */
	theme: {
		accent: '#00bcd4',
		bg: '#0a1218',
		soft: '#7ee8fa',
		deep: '#0097a7',
		hover: '#4dd0e1',
		panel: '#0d1a22',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'wuthering waves cheat',
		list: [
			'wuthering waves cheat',
			'wuthering waves cheats',
			'wuthering waves hacks',
			'wuthering waves esp',
			'wuthering waves aimbot',
			'wuthering waves mod menu',
			'wuthering waves cheats pc',
			'wuthering waves trainer',
		] as const,
	},

	seo: {
		homeTitle: 'Wuthering Waves Cheat | Official PC Site',
		homeDescription:
			'Official Wuthering Waves cheat for Windows PC. Enemy ESP, Echo & loot ESP, aimbot, teleport, god mode, and adjustable config — instant delivery.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license — enemy ESP, chest ESP, aimbot, teleport, auto loot, god mode, noclip, free camera, FOV changer, and FPS unlocker.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and teleport features on both. Instant delivery after checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you launch on Windows PC.',
		previewTitle: 'Wuthering Waves Cheat | ESP & Aimbot PC',
		previewDescription:
			'Buy undetected Wuthering Waves cheat for PC. Enemy ESP, Echo & loot ESP, chest ESP, aimbot, teleport, god mode, and custom ESP builder in one license.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Wuthering Waves — delivery, setup, {antiCheat} updates, refunds, and Windows PC notes.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, teleport, and patch updates for Wuthering Waves on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — Echo farming, ESP tips, aimbot settings, and {antiCheat} update coverage for PC players.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and teleport for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes enemy ESP, Echo & loot ESP, aimbot, teleport, and god mode with {antiCheat} maintenance.',
		heroLede: 'Enemy ESP, Echo & loot ESP, aimbot, teleport, and god mode for Wuthering Waves on Windows PC.',
		blogLabel: 'Wuthering Waves Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Wuthering Waves — enemy ESP, chest ESP, aimbot, teleport, auto loot, god mode, and custom ESP builder.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, teleport, and support.',
		chipEsp: 'Enemy ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Teleport',
		chipUpdates: 'Auto loot',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-04',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/wuthering-waves-cheat-s1.webp',
				title: 'Wuthering Waves cheat mod menu',
				caption: 'Adjustable config system with ESP, aimbot, and teleport toggles',
			},
			{
				src: '/images/wuthering-waves-cheat-s2.webp',
				title: 'Wuthering Waves ESP overlay',
				caption: 'Enemy ESP, Echo ESP, and chest ESP with distance readouts',
			},
			{
				src: '/images/wuthering-waves-cheat-s3.webp',
				title: 'Wuthering Waves cheat in-game view',
				caption: 'Free camera, FOV changer, and FPS unlocker for PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
