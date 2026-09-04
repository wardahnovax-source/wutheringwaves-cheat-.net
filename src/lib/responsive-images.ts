/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/** Homepage / banner hero — ultra-wide 4K ladder */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/wuthering-waves-cheat-hero-640w.webp', width: 640 },
	{ src: '/images/wuthering-waves-cheat-hero-1024w.webp', width: 1024 },
	{ src: '/images/wuthering-waves-cheat-hero-1536w.webp', width: 1536 },
	{ src: '/images/wuthering-waves-cheat-hero-2560w.webp', width: 2560 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

export const heroSrc = '/images/wuthering-waves-cheat-hero-1536w.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

export const heroWidth = 2560;
export const heroHeight = 1024;

export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
