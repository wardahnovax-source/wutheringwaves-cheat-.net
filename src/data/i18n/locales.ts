export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Wuthering Waves Cheat blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Wuthering Waves Cheat Blog | Raid Guides',
		blogDescription:
			'Wuthering Waves guides — raid tips, ESP, aimbot notes, loot routes, and game update coverage. English blog at wutheringwavescheat.net/blog/.',
		blogH1: 'Wuthering Waves Cheat Intel',
		blogIntro:
			'Short Wuthering Waves guides for open-world exploration and boss fights. Pair these tips with the Wuthering Waves Cheat product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Wuthering Waves Cheat home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Wuthering Waves Cheat con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Wuthering Waves en PC Windows.',
		blogH1: 'Blog Wuthering Waves Cheat — Guías globales',
		blogIntro:
			'Guías SEO de trucos Wuthering Waves indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Anti-Cheat protection en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Wuthering Waves relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Wuthering Waves Cheat',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Wuthering Waves Cheat : triches indétectables, ESP wallhack, radar et Aimbot pour Wuthering Waves sur PC Windows.',
		blogH1: 'Blog Wuthering Waves Cheat — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Wuthering Waves indétectables, ESP wallhack, radar hack, Aimbot et Anti-Cheat protection en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Wuthering Waves associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Wuthering Waves Cheat',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Wuthering Waves Cheat Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Wuthering Waves Cheat Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Wuthering Waves auf Windows PC.',
		blogH1: 'Wuthering Waves Cheat Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Wuthering Waves Cheat, ESP Wallhack, Radar Hack, Aimbot und Anti-Cheat protection in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Wuthering Waves Guides',
		allPosts: 'Alle Beiträge',
		home: 'Wuthering Waves Cheat Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Wuthering Waves Cheat com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Wuthering Waves no PC.',
		blogH1: 'Blog Wuthering Waves Cheat — Guias globais',
		blogIntro:
			'Guias SEO de cheats Wuthering Waves indetectáveis, ESP wallhack, radar hack, Aimbot e Anti-Cheat protection em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Wuthering Waves relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Wuthering Waves Cheat',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Wuthering Waves Cheat con guide cheat indetectable, ESP wallhack, radar e Aimbot per Wuthering Waves su PC Windows.',
		blogH1: 'Blog Wuthering Waves Cheat — Guide globali',
		blogIntro:
			'Guide SEO cheat Wuthering Waves indetectable, ESP wallhack, radar hack, Aimbot e Anti-Cheat protection in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Wuthering Waves correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Wuthering Waves Cheat',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Wuthering Waves Cheat Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Wuthering Waves Cheat blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Wuthering Waves op Windows PC.',
		blogH1: 'Wuthering Waves Cheat Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Wuthering Waves cheats, ESP wallhack, radar hack, Aimbot en Anti-Cheat protection in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Wuthering Waves gidsen',
		allPosts: 'Alle posts',
		home: 'Wuthering Waves Cheat home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Wuthering Waves Cheat z poradnikami undetected ESP, wallhack, radar i Aimbot dla Wuthering Waves na PC.',
		blogH1: 'Blog Wuthering Waves Cheat — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Wuthering Waves, ESP wallhack, radar hack, Aimbot i Anti-Cheat protection w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Wuthering Waves',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Wuthering Waves Cheat',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Wuthering Waves Cheat 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Wuthering Waves Cheat: undetected ESP, wallhack, radar и Aimbot для Wuthering Waves на Windows PC.',
		blogH1: 'Блог Wuthering Waves Cheat — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Wuthering Waves, ESP wallhack, radar hack, Aimbot и Anti-Cheat protection на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Wuthering Waves',
		allPosts: 'Все статьи',
		home: 'Главная Wuthering Waves Cheat',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Wuthering Waves Cheat Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Wuthering Waves Cheat blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Wuthering Waves Windows PC.',
		blogH1: 'Wuthering Waves Cheat Blog — Küresel rehberler',
		blogIntro:
			'Undetected Wuthering Waves hileleri, ESP wallhack, radar hack, Aimbot ve Anti-Cheat protection SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Wuthering Waves rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Wuthering Waves Cheat ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Wuthering Waves Cheat 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Wuthering Waves Cheat: غش undetected وESP wallhack ورadar وAimbot لـ Wuthering Waves على Windows PC.',
		blogH1: 'مدونة Wuthering Waves Cheat — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Wuthering Waves undetected وESP wallhack ورadar hack وAimbot وAnti-Cheat protection بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Wuthering Waves ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Wuthering Waves Cheat',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Wuthering Waves Cheat ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Wuthering Waves Cheatブログ：undetected ESP、wallhack、radar、Aimbotガイド。Wuthering Waves Windows PC向け。',
		blogH1: 'Wuthering Waves Cheat ブログ — グローバルガイド',
		blogIntro:
			'undetected Wuthering Wavesチート、ESP wallhack、radar hack、Aimbot、Anti-Cheat protectionのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Wuthering Wavesガイド',
		allPosts: 'すべての記事',
		home: 'Wuthering Waves Cheat ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Wuthering Waves Cheat 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Wuthering Waves Cheat 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Wuthering Waves Windows PC.',
		blogH1: 'Wuthering Waves Cheat 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Wuthering Waves 치트, ESP wallhack, radar hack, Aimbot, Anti-Cheat protection SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Wuthering Waves 가이드',
		allPosts: '모든 게시물',
		home: 'Wuthering Waves Cheat 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Wuthering Waves Cheat 博客 2026 | 22种语言指南',
		blogDescription:
			'Wuthering Waves Cheat博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Wuthering Waves Windows PC。',
		blogH1: 'Wuthering Waves Cheat 博客 — 全球指南',
		blogIntro:
			'undetected Wuthering Waves作弊、ESP wallhack、radar hack、Aimbot和Anti-Cheat protection的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Wuthering Waves指南',
		allPosts: '所有文章',
		home: 'Wuthering Waves Cheat 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Wuthering Waves Cheat ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Wuthering Waves Cheat ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Wuthering Waves Windows PC के लिए।',
		blogH1: 'Wuthering Waves Cheat ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Wuthering Waves cheats, ESP wallhack, radar hack, Aimbot और Anti-Cheat protection SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Wuthering Waves गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Wuthering Waves Cheat होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Wuthering Waves Cheat: panduan undetected ESP, wallhack, radar dan Aimbot untuk Wuthering Waves di PC Windows.',
		blogH1: 'Blog Wuthering Waves Cheat — Panduan global',
		blogIntro:
			'Panduan SEO cheat Wuthering Waves undetected, ESP wallhack, radar hack, Aimbot dan Anti-Cheat protection dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Wuthering Waves terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Wuthering Waves Cheat',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Wuthering Waves Cheat 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Wuthering Waves Cheat: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Wuthering Waves บน PC',
		blogH1: 'บล็อก Wuthering Waves Cheat — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Wuthering Waves undetected, ESP wallhack, radar hack, Aimbot และ Anti-Cheat protection 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Wuthering Waves ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Wuthering Waves Cheat',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Wuthering Waves Cheat: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Wuthering Waves trên PC.',
		blogH1: 'Blog Wuthering Waves Cheat — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Wuthering Waves undetected, ESP wallhack, radar hack, Aimbot và Anti-Cheat protection bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Wuthering Waves liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Wuthering Waves Cheat',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Wuthering Waves Cheat 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Wuthering Waves Cheat: undetected ESP, wallhack, radar та Aimbot для Wuthering Waves на Windows PC.',
		blogH1: 'Блог Wuthering Waves Cheat — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Wuthering Waves, ESP wallhack, radar hack, Aimbot та Anti-Cheat protection 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Wuthering Waves",
		allPosts: 'Усі статті',
		home: 'Головна Wuthering Waves Cheat',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Wuthering Waves Cheat: undetected ESP, wallhack, radar a Aimbot pro Wuthering Waves na Windows PC.',
		blogH1: 'Blog Wuthering Waves Cheat — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Wuthering Waves cheaty, ESP wallhack, radar hack, Aimbot a Anti-Cheat protection ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Wuthering Waves průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Wuthering Waves Cheat',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Wuthering Waves Cheat 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Wuthering Waves Cheat: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Wuthering Waves pe PC.',
		blogH1: 'Blog Wuthering Waves Cheat — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Wuthering Waves undetected, ESP wallhack, radar hack, Aimbot și Anti-Cheat protection în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Wuthering Waves related',
		allPosts: 'Toate articolele',
		home: 'Acasă Wuthering Waves Cheat',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Wuthering Waves Cheat Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Wuthering Waves Cheat blogg med undetected ESP, wallhack, radar och Aimbot guider för Wuthering Waves på PC.',
		blogH1: 'Wuthering Waves Cheat Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Wuthering Waves cheats, ESP wallhack, radar hack, Aimbot och Anti-Cheat protection på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Wuthering Waves guider',
		allPosts: 'Alla inlägg',
		home: 'Wuthering Waves Cheat hem',
		language: 'Språk',
	},
};
