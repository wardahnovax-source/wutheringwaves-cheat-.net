import { siteConfig } from './site';
import { wutheringWavesImages } from './wuthering-waves';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	wutheringWavesImages.espWallhack,
	wutheringWavesImages.aimbotCombat,
	wutheringWavesImages.aimbotSkeleton,
	wutheringWavesImages.playerEsp,
	wutheringWavesImages.cheatsCombat,
	'/images/wuthering-waves-cheat-s2.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/wuthering-waves-cheat-hero-1536w.webp',
	'wuthering-waves-esp': wutheringWavesImages.playerEsp,
	'wuthering-waves-aimbot': wutheringWavesImages.aimbotCombat,
	features: '/images/wuthering-waves-cheat-hero-1536w.webp',
	pricing: '/images/wuthering-waves-cheat-hero-1536w.webp',
	setup: wutheringWavesImages.playerEsp,
	updates: '/images/wuthering-waves-cheat-hero-1536w.webp',
	faq: wutheringWavesImages.aimbotSkeleton,
	support: wutheringWavesImages.cheatsCombat,
	undetected: wutheringWavesImages.espWallhack,
	wallhack: wutheringWavesImages.espWallhack,
	radar: wutheringWavesImages.playerEsp,
	'anti-cheat': wutheringWavesImages.aimbotCombat,
	'cheats-2026': '/images/wuthering-waves-cheat-hero-1536w.webp',
	hacks: wutheringWavesImages.cheatsCombat,
	'cheat-download': wutheringWavesImages.cheatsCombat,
	'mod-menu': wutheringWavesImages.playerEsp,
	'soft-aim': wutheringWavesImages.aimbotSkeleton,
	'best-cheats': '/images/wuthering-waves-cheat-hero-1536w.webp',
	'aimbot-hack': wutheringWavesImages.aimbotSkeleton,
	'esp-hack': wutheringWavesImages.espWallhack,
	'unlock-all': wutheringWavesImages.playerEsp,
	privacy: wutheringWavesImages.aimbotCombat,
	refund: wutheringWavesImages.cheatsCombat,
	terms: wutheringWavesImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
