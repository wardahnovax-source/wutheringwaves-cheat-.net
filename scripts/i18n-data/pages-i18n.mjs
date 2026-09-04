import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Wuthering Waves indetectables para Wuthering Waves en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Anti-Cheat protection. Entrega digital instantánea.', h1: 'Wuthering Waves Cheat — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Wuthering Waves en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Anti-Cheat protection tras cada parche.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galería Wuthering Waves Cheat — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Wuthering Waves Cheat en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Wuthering Waves indétectables pour Wuthering Waves sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Anti-Cheat protection. Livraison numérique instantanée.', h1: 'Wuthering Waves Cheat — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Wuthering Waves sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Anti-Cheat protection après chaque patch.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galerie Wuthering Waves Cheat — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Wuthering Waves Cheat en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Wuthering Waves Cheat für Wuthering Waves auf PC. ESP Wallhack, Radar Hack und Aimbot mit Anti-Cheat protection-Wartung. Sofortige digitale Lieferung.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Wuthering Waves: ESP Wallhack, Radar und Aimbot mit Anti-Cheat protection-Wartung nach jedem Patch.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Wuthering Waves Cheat Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Wuthering Waves Cheat 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Wuthering Waves indetectáveis para Wuthering Waves no PC. ESP wallhack, radar hack e Aimbot com manutenção Anti-Cheat protection. Entrega digital instantánea.', h1: 'Wuthering Waves Cheat — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Wuthering Waves no Windows PC: ESP wallhack, radar e Aimbot com manutenção Anti-Cheat protection após cada patch.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galeria Wuthering Waves Cheat — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Wuthering Waves Cheat em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Wuthering Waves indetectable per Wuthering Waves su PC. ESP wallhack, radar hack e Aimbot con manutenzione Anti-Cheat protection. Consegna digitale istantanea.', h1: 'Wuthering Waves Cheat — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Wuthering Waves su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Anti-Cheat protection dopo ogni patch.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galleria Wuthering Waves Cheat — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Wuthering Waves Cheat nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Wuthering Waves cheats voor Wuthering Waves op PC. ESP wallhack, radar hack en Aimbot met Anti-Cheat protection-onderhoud. Directe digitale levering.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Wuthering Waves: ESP wallhack, radar en Aimbot met Anti-Cheat protection-onderhoud na elke patch.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Wuthering Waves Cheat galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Wuthering Waves Cheat in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Wuthering Waves dla Wuthering Waves na PC. ESP wallhack, radar hack i Aimbot z konserwacją Anti-Cheat protection. Natychmiastowa dostawa cyfrowa.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Wuthering Waves na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Anti-Cheat protection po każdym patchu.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galeria Wuthering Waves Cheat — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Wuthering Waves Cheat w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Wuthering Waves для Wuthering Waves на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Anti-Cheat protection. Мгновенная цифровая доставка.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Wuthering Waves на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Anti-Cheat protection после патчей.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Галерея Wuthering Waves Cheat — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Wuthering Waves Cheat в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack ve Aimbot', desc: 'Wuthering Waves için undetected hileler. ESP wallhack, radar hack ve Aimbot — Anti-Cheat protection bakımı. Anında dijital teslimat.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack ve Aimbot', intro: 'Wuthering Waves Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Anti-Cheat protection bakımı dahil.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Wuthering Waves Cheat galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Wuthering Waves Cheat', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Wuthering Waves Cheat 2026 | ESP وWallhack وAimbot', desc: 'غش Wuthering Waves undetected لـ Wuthering Waves على PC. ESP wallhack ورadar hack وAimbot مع صيانة Anti-Cheat protection. تسليم رقمي فوري.', h1: 'Wuthering Waves Cheat — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Wuthering Waves على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'معرض Wuthering Waves Cheat — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Wuthering Waves Cheat في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Wuthering Waves Cheat 2026 | ESP・Wallhack・Aimbot', desc: 'Wuthering Waves向けundetectedチート。ESP wallhack、radar hack、Aimbot、Anti-Cheat protectionメンテナンス。即時デジタル配信。', h1: 'Wuthering Waves Cheat — Undetected ESP・Wallhack・Aimbot', intro: 'Wuthering Waves Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Anti-Cheat protectionメンテナンス付き。', imageAlt: 'Wuthering Waves cheats hero ESP aimbot wallhack', gallery: 'Wuthering Waves Cheatギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWuthering Waves Cheatを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack, Aimbot', desc: 'Wuthering Waves undetected 치트. ESP wallhack, radar hack, Aimbot, Anti-Cheat protection 유지보수. 즉시 디지털 배송.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack, Aimbot', intro: 'Wuthering Waves Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Anti-Cheat protection 유지보수 포함.', imageAlt: 'Wuthering Waves cheats hero ESP aimbot wallhack', gallery: 'Wuthering Waves Cheat 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Wuthering Waves Cheat를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Wuthering Waves Cheat 2026 | ESP、Wallhack、Aimbot', desc: 'Wuthering Waves undetected作弊。ESP wallhack、radar hack、Aimbot、Anti-Cheat protection维护。即时数字交付。', h1: 'Wuthering Waves Cheat — Undetected ESP、Wallhack、Aimbot', intro: 'Wuthering Waves Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Anti-Cheat protection维护。', imageAlt: 'Wuthering Waves cheats hero ESP aimbot wallhack', gallery: 'Wuthering Waves Cheat图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Wuthering Waves Cheat的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack और Aimbot', desc: 'Wuthering Waves undetected cheats. ESP wallhack, radar hack, Aimbot, Anti-Cheat maintenance. Instant digital delivery.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack और Aimbot', intro: 'Wuthering Waves Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Anti-Cheat maintenance सहित.', imageAlt: 'Wuthering Waves cheats hero ESP aimbot wallhack', gallery: 'Wuthering Waves Cheat gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Wuthering Waves Cheat क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Wuthering Waves undetected untuk Wuthering Waves di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Anti-Cheat protection. Pengiriman digital instan.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Wuthering Waves di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galeri Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Wuthering Waves Cheat di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Wuthering Waves undetected สำหรับ Wuthering Waves บน PC. ESP wallhack, radar hack, Aimbot, Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Wuthering Waves บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Anti-Cheat maintenance', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'แกลเลอรี Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Wuthering Waves Cheat ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Wuthering Waves undetected cho Wuthering Waves trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Anti-Cheat protection. Giao hàng kỹ thuật số tức thì.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Wuthering Waves trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Thư viện Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Wuthering Waves Cheat 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Wuthering Waves для Wuthering Waves на PC. ESP wallhack, radar hack, Aimbot, обслуговування Anti-Cheat protection. Мгновенная цифровая доставка.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Wuthering Waves на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Галерея Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Wuthering Waves Cheat у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Wuthering Waves cheaty pro Wuthering Waves na PC. ESP wallhack, radar hack, Aimbot, údržba Anti-Cheat protection. Okamžité digitální doručení.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Wuthering Waves na Windows PC: ESP wallhack, radar, Aimbot s údržbou Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galerie Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Wuthering Waves Cheat v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Wuthering Waves undetected pentru Wuthering Waves pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Anti-Cheat protection. Livrare digitală instantă.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Wuthering Waves pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Anti-Cheat protection.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Galerie Wuthering Waves Cheat — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Wuthering Waves Cheat în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Wuthering Waves Cheat 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Wuthering Waves cheats för Wuthering Waves på PC. ESP wallhack, radar hack, Aimbot, Anti-Cheat protection-underhåll. Omedelbar digital leverans.', h1: 'Wuthering Waves Cheat — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Wuthering Waves på Windows PC: ESP wallhack, radar, Aimbot med Anti-Cheat protection-underhåll.', imageAlt: 'Wuthering Waves ESP player tags hack', gallery: 'Wuthering Waves Cheat galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Wuthering Waves Cheat 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'wuthering-waves-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'wuthering-waves-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Anti-Cheat Maintenance Log', focus: 'game patch status and rebuild notes', altKeyword: 'updates Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Anti-Cheat Safe Status', focus: 'undetected maintenance after Anti-Cheat protection patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	'anti-cheat': { suffix: 'Patch Maintenance', focus: 'how game updates are handled for Wuthering Waves hacks', altKeyword: 'Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Wuthering Waves cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Wuthering Waves hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Wuthering Waves cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Wuthering Waves', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'wuthering-waves-esp': 'Cajas de jugador y wallhack',
		'wuthering-waves-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		'anti-cheat': 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'wuthering-waves-esp': 'Boîtes joueur et wallhack',
		'wuthering-waves-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		'anti-cheat': 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'wuthering-waves-esp': 'Spielerboxen & Wallhack',
		'wuthering-waves-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		'anti-cheat': 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'wuthering-waves-esp': 'Caixas de jogador e wallhack',
		'wuthering-waves-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		'anti-cheat': 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'wuthering-waves-esp': 'Box giocatore e wallhack',
		'wuthering-waves-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		'anti-cheat': 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'wuthering-waves-esp': 'Боксы игроков и wallhack',
		'wuthering-waves-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		'anti-cheat': 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Wuthering Waves Cheat', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Wuthering Waves Cheat screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'wuthering-waves-esp': { en: 'Wuthering Waves ESP', es: 'ESP Wuthering Waves', fr: 'ESP Wuthering Waves', de: 'Wuthering Waves ESP', pt: 'ESP Wuthering Waves', it: 'ESP Wuthering Waves', nl: 'Wuthering Waves ESP', pl: 'ESP Wuthering Waves', ru: 'ESP Wuthering Waves', tr: 'Wuthering Waves ESP', ar: 'ESP Wuthering Waves', ja: 'Wuthering Waves ESP', ko: 'Wuthering Waves ESP', zh: 'Wuthering Waves ESP', hi: 'Wuthering Waves ESP', id: 'ESP Wuthering Waves', th: 'Wuthering Waves ESP', vi: 'ESP Wuthering Waves', uk: 'ESP Wuthering Waves', cs: 'Wuthering Waves ESP', ro: 'ESP Wuthering Waves', sv: 'Wuthering Waves ESP' },
	'wuthering-waves-aimbot': { en: 'Wuthering Waves Aimbot', es: 'Aimbot Wuthering Waves', fr: 'Aimbot Wuthering Waves', de: 'Wuthering Waves Aimbot', pt: 'Aimbot Wuthering Waves', it: 'Aimbot Wuthering Waves', nl: 'Wuthering Waves Aimbot', pl: 'Aimbot Wuthering Waves', ru: 'Aimbot Wuthering Waves', tr: 'Wuthering Waves Aimbot', ar: 'Aimbot Wuthering Waves', ja: 'Wuthering Waves Aimbot', ko: 'Wuthering Waves Aimbot', zh: 'Wuthering Waves Aimbot', hi: 'Wuthering Waves Aimbot', id: 'Aimbot Wuthering Waves', th: 'Wuthering Waves Aimbot', vi: 'Aimbot Wuthering Waves', uk: 'Aimbot Wuthering Waves', cs: 'Wuthering Waves Aimbot', ro: 'Aimbot Wuthering Waves', sv: 'Wuthering Waves Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Wuthering Waves Wallhack', es: 'Wallhack Wuthering Waves', fr: 'Wallhack Wuthering Waves', de: 'Wuthering Waves Wallhack', pt: 'Wallhack Wuthering Waves', it: 'Wallhack Wuthering Waves', nl: 'Wuthering Waves Wallhack', pl: 'Wallhack Wuthering Waves', ru: 'Wallhack Wuthering Waves', tr: 'Wuthering Waves Wallhack', ar: 'Wallhack Wuthering Waves', ja: 'Wuthering Waves Wallhack', ko: 'Wuthering Waves Wallhack', zh: 'Wuthering Waves Wallhack', hi: 'Wuthering Waves Wallhack', id: 'Wallhack Wuthering Waves', th: 'Wuthering Waves Wallhack', vi: 'Wallhack Wuthering Waves', uk: 'Wallhack Wuthering Waves', cs: 'Wuthering Waves Wallhack', ro: 'Wallhack Wuthering Waves', sv: 'Wuthering Waves Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'anti-cheat': { en: 'Anti-Cheat Bypass', es: 'Bypass Anti-Cheat', fr: 'Bypass Anti-Cheat', de: 'Anti-Cheat Bypass', pt: 'Bypass Anti-Cheat', it: 'Bypass Anti-Cheat', nl: 'Anti-Cheat Bypass', pl: 'Bypass Anti-Cheat', ru: 'Bypass Anti-Cheat', tr: 'Anti-Cheat bypass', ar: 'Bypass Anti-Cheat', ja: 'Anti-Cheat Bypass', ko: 'Anti-Cheat Bypass', zh: 'Anti-Cheat Bypass', hi: 'Anti-Cheat Bypass', id: 'Bypass Anti-Cheat', th: 'Anti-Cheat Bypass', vi: 'Bypass Anti-Cheat', uk: 'Bypass Anti-Cheat', cs: 'Anti-Cheat Bypass', ro: 'Bypass Anti-Cheat', sv: 'Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Wuthering Waves Cheat 2026', es: 'Trucos Wuthering Waves 2026', fr: 'Triches Wuthering Waves 2026', de: 'Wuthering Waves Cheat 2026', pt: 'Cheats Wuthering Waves 2026', it: 'Cheat Wuthering Waves 2026', nl: 'Wuthering Waves Cheat 2026', pl: 'Cheaty Wuthering Waves 2026', ru: 'Читы Wuthering Waves 2026', tr: 'Wuthering Waves Hileleri 2026', ar: 'غش Wuthering Waves 2026', ja: 'Wuthering Waves Cheat 2026', ko: 'Wuthering Waves Cheat 2026', zh: 'Wuthering Waves作弊 2026', hi: 'Wuthering Waves Cheat 2026', id: 'Cheat Wuthering Waves 2026', th: 'Wuthering Waves Cheat 2026', vi: 'Cheat Wuthering Waves 2026', uk: 'Чіти Wuthering Waves 2026', cs: 'Wuthering Waves cheaty 2026', ro: 'Cheats Wuthering Waves 2026', sv: 'Wuthering Waves Cheat 2026' },
	hacks: { en: 'Wuthering Waves Cheat', es: 'Trucos Wuthering Waves', fr: 'Triches Wuthering Waves', de: 'Wuthering Waves Cheat', pt: 'Cheats Wuthering Waves', it: 'Cheat Wuthering Waves', nl: 'Wuthering Waves Cheat', pl: 'Cheaty Wuthering Waves', ru: 'Читы Wuthering Waves', tr: 'Wuthering Waves Hileleri', ar: 'غش Wuthering Waves', ja: 'Wuthering Waves Cheat', ko: 'Wuthering Waves Cheat', zh: 'Wuthering Waves作弊', hi: 'Wuthering Waves Cheat', id: 'Cheat Wuthering Waves', th: 'Wuthering Waves Cheat', vi: 'Cheat Wuthering Waves', uk: 'Чіти Wuthering Waves', cs: 'Wuthering Waves cheaty', ro: 'Cheats Wuthering Waves', sv: 'Wuthering Waves Cheat' },
	'cheat-download': { en: 'Wuthering Waves Cheat Download', es: 'Descarga Wuthering Waves Cheat', fr: 'Téléchargement Wuthering Waves Cheat', de: 'Wuthering Waves Cheat Download', pt: 'Download Wuthering Waves Cheat', it: 'Download Wuthering Waves Cheat', nl: 'Wuthering Waves Cheat Download', pl: 'Pobieranie Wuthering Waves Cheat', ru: 'Скачать Wuthering Waves Cheat', tr: 'Wuthering Waves Hile İndir', ar: 'تحميل Wuthering Waves Cheat', ja: 'Wuthering Waves Cheat Download', ko: 'Wuthering Waves Cheat Download', zh: 'Wuthering Waves作弊下载', hi: 'Wuthering Waves Cheat Download', id: 'Download Cheat Wuthering Waves', th: 'ดาวน์โหลด Wuthering Waves Cheat', vi: 'Tải Cheat Wuthering Waves', uk: 'Завантаження Wuthering Waves Cheat', cs: 'Stáhnout Wuthering Waves Cheat', ro: 'Descărcare Wuthering Waves Cheat', sv: 'Wuthering Waves Cheat Download' },
	'mod-menu': { en: 'Wuthering Waves Mod Menu', es: 'Menú mod Wuthering Waves', fr: 'Menu mod Wuthering Waves', de: 'Wuthering Waves Mod-Menü', pt: 'Menu mod Wuthering Waves', it: 'Mod menu Wuthering Waves', nl: 'Wuthering Waves Mod Menu', pl: 'Mod menu Wuthering Waves', ru: 'Мод-меню Wuthering Waves', tr: 'Wuthering Waves Mod Menü', ar: 'قائمة مود Wuthering Waves', ja: 'Wuthering Waves Mod Menu', ko: 'Wuthering Waves 모드 메뉴', zh: 'Wuthering Waves修改菜单', hi: 'Wuthering Waves Mod Menu', id: 'Menu mod Wuthering Waves', th: 'เมนูมอด Wuthering Waves', vi: 'Mod menu Wuthering Waves', uk: 'Мод-меню Wuthering Waves', cs: 'Wuthering Waves mod menu', ro: 'Meniu mod Wuthering Waves', sv: 'Wuthering Waves Mod-meny' },
	'soft-aim': { en: 'Wuthering Waves Soft Aim', es: 'Soft aim Wuthering Waves', fr: 'Soft aim Wuthering Waves', de: 'Wuthering Waves Soft Aim', pt: 'Soft aim Wuthering Waves', it: 'Soft aim Wuthering Waves', nl: 'Wuthering Waves Soft Aim', pl: 'Soft aim Wuthering Waves', ru: 'Soft aim Wuthering Waves', tr: 'Wuthering Waves Soft Aim', ar: 'Soft aim Wuthering Waves', ja: 'Wuthering Waves Soft Aim', ko: 'Wuthering Waves Soft Aim', zh: 'Wuthering Waves Soft Aim', hi: 'Wuthering Waves Soft Aim', id: 'Soft aim Wuthering Waves', th: 'Wuthering Waves Soft Aim', vi: 'Soft aim Wuthering Waves', uk: 'Soft aim Wuthering Waves', cs: 'Wuthering Waves Soft Aim', ro: 'Soft aim Wuthering Waves', sv: 'Wuthering Waves Soft Aim' },
	'best-cheats': { en: 'Best Wuthering Waves Cheat', es: 'Mejores trucos Wuthering Waves', fr: 'Meilleures triches Wuthering Waves', de: 'Beste Wuthering Waves Cheat', pt: 'Melhores cheats Wuthering Waves', it: 'Migliori cheat Wuthering Waves', nl: 'Beste Wuthering Waves Cheat', pl: 'Najlepsze cheaty Wuthering Waves', ru: 'Лучшие читы Wuthering Waves', tr: 'En İyi Wuthering Waves Hileleri', ar: 'أفضل غش Wuthering Waves', ja: '最強Wuthering Wavesチート', ko: '최고의 Wuthering Waves 치트', zh: '最佳Wuthering Waves作弊', hi: 'सर्वश्रेष्ठ Wuthering Waves Cheat', id: 'Cheat Wuthering Waves terbaik', th: 'Cheat Wuthering Waves ที่ดีที่สุด', vi: 'Cheat Wuthering Waves tốt nhất', uk: 'Найкращі чіти Wuthering Waves', cs: 'Nejlepší Wuthering Waves cheaty', ro: 'Cele mai bune cheats Wuthering Waves', sv: 'Bästa Wuthering Waves Cheat' },
	'aimbot-hack': { en: 'Wuthering Waves Aimbot Hack', es: 'Hack aimbot Wuthering Waves', fr: 'Hack aimbot Wuthering Waves', de: 'Wuthering Waves Aimbot Hack', pt: 'Hack aimbot Wuthering Waves', it: 'Hack aimbot Wuthering Waves', nl: 'Wuthering Waves Aimbot Hack', pl: 'Hack aimbot Wuthering Waves', ru: 'Хак aimbot Wuthering Waves', tr: 'Wuthering Waves Aimbot Hilesi', ar: 'هاك Aimbot Wuthering Waves', ja: 'Wuthering Waves Aimbot Hack', ko: 'Wuthering Waves 에임봇 핵', zh: 'Wuthering Waves自瞄外挂', hi: 'Wuthering Waves Aimbot Hack', id: 'Hack aimbot Wuthering Waves', th: 'Hack Aimbot Wuthering Waves', vi: 'Hack aimbot Wuthering Waves', uk: 'Хак aimbot Wuthering Waves', cs: 'Wuthering Waves aimbot hack', ro: 'Hack aimbot Wuthering Waves', sv: 'Wuthering Waves Aimbot Hack' },
	'esp-hack': { en: 'Wuthering Waves ESP Hack', es: 'Hack ESP Wuthering Waves', fr: 'Hack ESP Wuthering Waves', de: 'Wuthering Waves ESP Hack', pt: 'Hack ESP Wuthering Waves', it: 'Hack ESP Wuthering Waves', nl: 'Wuthering Waves ESP Hack', pl: 'Hack ESP Wuthering Waves', ru: 'Хак ESP Wuthering Waves', tr: 'Wuthering Waves ESP Hilesi', ar: 'هاك ESP Wuthering Waves', ja: 'Wuthering Waves ESP Hack', ko: 'Wuthering Waves ESP 핵', zh: 'Wuthering Waves ESP外挂', hi: 'Wuthering Waves ESP Hack', id: 'Hack ESP Wuthering Waves', th: 'Hack ESP Wuthering Waves', vi: 'Hack ESP Wuthering Waves', uk: 'Хак ESP Wuthering Waves', cs: 'Wuthering Waves ESP hack', ro: 'Hack ESP Wuthering Waves', sv: 'Wuthering Waves ESP Hack' },
	'unlock-all': { en: 'Wuthering Waves Unlock All', es: 'Unlock all Wuthering Waves', fr: 'Unlock all Wuthering Waves', de: 'Wuthering Waves Unlock All', pt: 'Unlock all Wuthering Waves', it: 'Unlock all Wuthering Waves', nl: 'Wuthering Waves Unlock All', pl: 'Unlock all Wuthering Waves', ru: 'Unlock all Wuthering Waves', tr: 'Wuthering Waves Unlock All', ar: 'Unlock all Wuthering Waves', ja: 'Wuthering Waves Unlock All', ko: 'Wuthering Waves Unlock All', zh: 'Wuthering Waves Unlock All', hi: 'Wuthering Waves Unlock All', id: 'Unlock all Wuthering Waves', th: 'Wuthering Waves Unlock All', vi: 'Unlock all Wuthering Waves', uk: 'Unlock all Wuthering Waves', cs: 'Wuthering Waves Unlock All', ro: 'Unlock all Wuthering Waves', sv: 'Wuthering Waves Unlock All' },
};

const CTA2_HREF = {
	'wuthering-waves-esp': '/wuthering-waves-cheats/',
	'wuthering-waves-aimbot': '/wuthering-waves-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/wuthering-waves-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/wuthering-waves-cheats/',
	wallhack: '/wuthering-waves-esp/',
	radar: '/wuthering-waves-esp/',
	'anti-cheat': '/updates/',
	'cheats-2026': '/wuthering-waves-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/wuthering-waves-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/wuthering-waves-aimbot/',
	'esp-hack': '/wuthering-waves-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Wuthering Waves Cheat`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Wuthering Waves Cheat — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for wutheringwavescheat.net and Wuthering Waves licenses.`),
		imageAlt: 'wuthering waves cheats',
		galleryTitle: 'wuthering waves cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on wutheringwavescheat.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@wutheringwavescheat.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
