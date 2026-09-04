import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const featureGroups = [
	{
		key: 'esp',
		icon: 'esp',
		items: ['featEnemyEsp', 'featEchoEsp', 'featChestEsp', 'featEspBuilder'],
	},
	{
		key: 'combat',
		icon: 'aim',
		items: ['featAimbot', 'featFov', 'featConfig'],
	},
	{
		key: 'gameplay',
		icon: 'move',
		items: ['featTeleport', 'featAutoLoot', 'featGodMode', 'featNoclip', 'featCamera', 'featFps'],
	},
] as const;

const quickLinks = [
	{ href: '/wuthering-waves-cheats/', labelKey: 'linkCheats' },
	{ href: '/wuthering-waves-esp/', labelKey: 'linkEsp' },
	{ href: '/wuthering-waves-aimbot/', labelKey: 'linkAimbot' },
	{ href: '/updates/', labelKey: 'linkStatus' },
] as const;

function FeatureIcon({ icon }: { icon: string }) {
	if (icon === 'esp') {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 8.5v3.2L14.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	}
	if (icon === 'aim') {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	}
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 3.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L12 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
		</svg>
	);
}

function HomeAboutInner() {
	const { t } = useTranslation();

	const highlights = ['highlightEsp', 'highlightAimbot', 'highlightTeleport', 'highlightUndetected'] as const;

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<div className="home-about__intro">
				<div className="home-about__intro-accent" aria-hidden="true" />
				<header className="home-about__head">
					<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
					<h2 id="home-about-title">
						<em>{t('home.aboutTitleAccent')}</em> {t('home.aboutTitleRest')}
					</h2>
					<p className="home-about__subtitle">{t('home.aboutSubtitle')}</p>
					<p className="home-about__lede">{t('home.aboutP1')}</p>
				</header>
				<ul className="home-about__highlights" aria-label={t('home.aboutHighlightsLabel')}>
					{highlights.map((key) => (
						<li key={key}>{t(`home.${key}`)}</li>
					))}
				</ul>
			</div>

			<div className="home-about__grid">
				{featureGroups.map((group) => (
					<article key={group.key} className="home-about__card">
						<header className="home-about__card-head">
							<span className="home-about__card-icon" aria-hidden="true">
								<FeatureIcon icon={group.icon} />
							</span>
							<h3>{t(`home.group${group.key.charAt(0).toUpperCase()}${group.key.slice(1)}`)}</h3>
						</header>
						<ul className="home-about__list">
							{group.items.map((item) => (
								<li key={item}>{t(`home.${item}`)}</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<div className="home-about__links">
				<p className="home-about__links-label">{t('home.aboutLinksLabel')}</p>
				<div className="home-about__links-row">
					{quickLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{t(`home.${link.labelKey}`)}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
