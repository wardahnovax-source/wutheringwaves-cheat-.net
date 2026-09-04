import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'wuthering waves cheats',
		title: 'wuthering waves cheats gallery',
		subtitle: 'Simple wuthering waves cheats visuals — ESP, wallhack, aimbot, and radar for Wuthering Waves on PC.',
		lead: 'Wuthering Waves Cheat helps you spot enemies, Scavs, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'wuthering waves cheats esp', copy: 'See players through walls with wuthering waves cheats esp and wallhack overlays.' },
			{ title: 'wuthering waves cheats radar', copy: 'Track nearby threats with wuthering waves cheats radar before you push or extract.' },
			{ title: 'wuthering waves cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Wuthering Waves raids on Windows PC.' },
		],
		updatesLabel: 'wuthering waves cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galería Wuthering Waves',
		subtitle: 'Visuales de Wuthering Waves con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Wuthering Waves Cheat está pensado para el loop BR de Wuthering Waves: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Wuthering Waves', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galerie Wuthering Waves',
		subtitle: 'Visuels Wuthering Waves — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Wuthering Waves Cheat suit la boucle BR de Wuthering Waves : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Wuthering Waves', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves Galerie',
		subtitle: 'Wuthering Waves-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Wuthering Waves Cheat passt zur Raid-Schleife von Wuthering Waves: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Wuthering Waves Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Wuthering Waves Cheat Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galeria Wuthering Waves',
		subtitle: 'Visuais de Wuthering Waves com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Wuthering Waves Cheat segue o loop BR do Wuthering Waves: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Wuthering Waves', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galleria Wuthering Waves',
		subtitle: 'Immagini Wuthering Waves — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Wuthering Waves Cheat è pensato per il loop BR di Wuthering Waves: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Wuthering Waves', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves galerij',
		subtitle: 'Wuthering Waves-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Wuthering Waves Cheat volgt de raid-loop van Wuthering Waves: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Wuthering Waves Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Wuthering Waves Cheat updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galeria Wuthering Waves',
		subtitle: 'Grafiki Wuthering Waves — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Wuthering Waves Cheat pasuje do pętli BR Wuthering Waves: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Wuthering Waves', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Галерея Wuthering Waves',
		subtitle: 'Визуалы Wuthering Waves — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Wuthering Waves Cheat создан для рейд-циклу Wuthering Waves: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Wuthering Waves', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Wuthering Waves Cheat, Wuthering Waves BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Wuthering Waves Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Wuthering Waves Cheat güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'معرض Wuthering Waves',
		subtitle: 'صور Wuthering Waves — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Wuthering Waves Cheat مبني لحلقة BR في Wuthering Waves: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Wuthering Waves', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのWuthering Wavesビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Wuthering Waves CheatはWuthering WavesのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Wuthering Wavesエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Wuthering Waves Cheat更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Wuthering Waves 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Wuthering Waves Cheat는 Wuthering Waves BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Wuthering Waves 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Wuthering Waves Cheat 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves 图库',
		subtitle: 'Wuthering Waves 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Wuthering Waves Cheat 为 Wuthering Waves BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Wuthering Waves 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Wuthering Waves Cheat 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Wuthering Waves Cheat Wuthering Waves BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Wuthering Waves Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Wuthering Waves Cheat updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galeri Wuthering Waves',
		subtitle: 'Visual Wuthering Waves — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Wuthering Waves Cheat untuk loop BR Wuthering Waves: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Wuthering Waves', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'แกลเลอรี Wuthering Waves',
		subtitle: 'ภาพ Wuthering Waves — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Wuthering Waves Cheat สำหรับลูป BR ของ Wuthering Waves: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Wuthering Waves', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Thư viện Wuthering Waves',
		subtitle: 'Hình ảnh Wuthering Waves — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Wuthering Waves Cheat cho vòng BR Wuthering Waves: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Wuthering Waves', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Галерея Wuthering Waves',
		subtitle: 'Візуали Wuthering Waves — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Wuthering Waves Cheat для рейд-циклу Wuthering Waves: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Wuthering Waves', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galerie Wuthering Waves',
		subtitle: 'Wuthering Waves vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Wuthering Waves Cheat pro BR smyčku Wuthering Waves: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Wuthering Waves', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Galerie Wuthering Waves',
		subtitle: 'Vizualuri Wuthering Waves — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Wuthering Waves Cheat pentru bucla BR Wuthering Waves: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Wuthering Waves', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Wuthering Waves Cheat',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Wuthering Waves Cheat',
		title: 'Wuthering Waves galleri',
		subtitle: 'Wuthering Waves-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Wuthering Waves Cheat för Wuthering Waves:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Wuthering Waves Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Wuthering Waves Cheat uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
