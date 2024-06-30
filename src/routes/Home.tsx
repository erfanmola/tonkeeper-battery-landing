import './Home.scss';

import * as i18n from "@solid-primitives/i18n";

import { AnimationProvider, useAnimation } from '../contexts/AnimationContext.ts';
import { Component, For, Show, Suspense, createEffect, createMemo, createResource, createSignal } from 'solid-js';
import { FaSolidCheck, FaSolidXmark } from 'solid-icons/fa'
import { FaSolidChevronDown, FaSolidChevronUp } from "solid-icons/fa";
import { Locale, fetchDictionary, localeDirections, localeFlags, locales } from '../locale.ts';
import { Meta, Title } from '@solidjs/meta';
import { Navigator, useNavigate, useParams } from '@solidjs/router';
import { TranslationProvider, useTranslation } from "../contexts/TranslationContext.ts";

import AppleConfirm from '../assets/svg/apple-confirm.svg';
import Battery from '../components/Battery.tsx';
import Card from '../components/Card.tsx';
import { CgMenu } from 'solid-icons/cg'
import { Collapse } from 'solid-collapse';
import FAQIcon from '../assets/svg/faq.svg';
import { FiGlobe } from 'solid-icons/fi'
import GlobeIcon from '../assets/svg/globe.svg';
import HorizontalRule from '../components/HorizontalRule.tsx';
import LottieAnimation from '../components/LottieAnimation';
import SecurityIcon from '../assets/svg/security.svg'
import { SolidTyper } from "solid-typer";
import TKSelect from '../components/TKSelect';
import TonLogo from '../assets/svg/ton.svg';
import TonkeeperLogo from '../assets/svg/tonkeeper.svg';
import USDTLogo from '../assets/svg/usdt.svg';
import { createIntersectionObserver } from '@solid-primitives/intersection-observer';
import { dict as en_dict } from "../i18n/en.ts";

const Header = (props: { navigate: Navigator }) => {
    const { t, locale, setLocale } = useTranslation();

    let localeItems = createMemo(() => Object.fromEntries(
        locales.map(locale => [
            locale.toString(),
            `${localeFlags[locale]} ${t(`locales.${locale}`)}`,
        ])
    ));

    const [langSelectValue, setlangSelectValue] = createSignal<string | null>(locale(), { equals: false });

    // Trash library, not reactive
    const [forceRerenderSolidTyper, setForceRerenderSolidTyper] = createSignal<boolean>(false);

    const typewriterWords = createMemo(() => t('home.header.hero.typewriter'));

    createEffect(() => {
        if (typewriterWords().length) {
            setForceRerenderSolidTyper(false);
            setTimeout(() => setForceRerenderSolidTyper(true));
        }
    });

    return (
        <>
            <div id='top-fade'></div>
            <div id='main-header'>
                <div id='main-header-menu'>
                    <div id='icon-menu-mobile'>
                        <CgMenu size={28} />
                    </div>

                    <nav>
                        <ul>
                            <li><a href='https://tonkeeper.com/'>{t('home.header.menu.home')}</a></li>
                            <li><a href='#section-FAQ'>{t('home.header.menu.faq')}</a></li>
                            <li><a href='https://t.me/help_tonkeeper_bot'>{t('home.header.menu.support')}</a></li>
                            <li><a href='https://github.com/tonkeeper'>{t('home.header.menu.github')}</a></li>
                        </ul>
                    </nav>

                    <TKSelect
                        items={localeItems()}
                        placeholder={t('home.header.language')}
                        icon={<FiGlobe size={22} />}
                        value={langSelectValue() || ''}
                        onChange={(lang) => {
                            props.navigate(lang == 'en' ? '/' : `/${lang}`, { replace: true });
                            setLocale(lang);
                            setlangSelectValue(lang);
                            document.querySelector('html')?.setAttribute('dir', localeDirections[lang as Locale] ?? 'ltr')
                        }}
                    />
                </div>
                <div id='main-header-hero'>
                    <div>
                        <div>
                            <TonkeeperLogo />
                            <h1>{t('home.header.hero.title')}</h1>
                        </div>
                        <Show when={forceRerenderSolidTyper()}>
                            <SolidTyper
                                className='header-auto-typer'
                                text={typewriterWords()}
                                backspaceSpeed={50}
                                typingSpeed={75}
                                loop={true}
                                cursor={true}
                                typingPause={5000}
                            />
                        </Show>
                        <p>{t('home.header.hero.description')}</p>
                    </div>

                    <div style={{ display: 'flex', "flex-direction": 'column' }}>
                        <LottieAnimation lottie='assets/tgs/Sapphire.tgs' />
                    </div>
                </div>
            </div>
            <HorizontalRule />
        </>
    );
};

const IntegratedTransfers = () => {
    const { t } = useTranslation();
    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-integratedTransfers'>
                <h3>{t('home.integratedTransfers.title')}</h3>
                <p>{t('home.integratedTransfers.description')}</p>

                <div>
                    <ul>
                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/NOT.tgs' loop={false} />
                                    <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.integratedTransfers.items.NOT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.NOT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/NFT.tgs' loop={false} />
                                    <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.integratedTransfers.items.NFT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.NFT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/USDT.tgs' loop={false} />
                                    <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.integratedTransfers.items.USDT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.USDT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/TON.tgs' loop={false} />
                                    <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.integratedTransfers.items.TON.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.TON.subtitle')}</p>
                            </Card>
                        </li>
                    </ul>

                    <div>
                        <LottieAnimation lottie='/assets/tgs/Tonkeeper-Battery-Transfers.tgs' />
                    </div>
                </div>
            </section>
            <HorizontalRule />
        </>
    );
};

const Recharge = () => {
    const { t } = useTranslation();

    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-recharge'>
                <h3>{t('home.recharge.title')}</h3>
                <p>{t('home.recharge.description')}</p>

                <ul>
                    <li>
                        <Card>
                            <div id='container-recharge-crypto'>
                                <div>
                                    <USDTLogo />
                                    <span>{t('home.recharge.items.crypto.symbol.USDT')}</span>
                                </div>

                                <div>
                                    <TonLogo />
                                    <span>{t('home.recharge.items.crypto.symbol.TON')}</span>
                                </div>
                            </div>

                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.crypto.title')}</h4>
                            <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.crypto.description')}</p>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <div id='container-recharge-in-app-purchase'>
                                <div>
                                    <div>
                                        <b>{t('home.recharge.items.inAppPurchase.symbol.title')}</b>
                                        <span>{t('home.recharge.items.inAppPurchase.symbol.cancel')}</span>
                                    </div>

                                    <div>
                                        <div>
                                            <TonkeeperLogo />
                                        </div>

                                        <div>
                                            <b>{t('home.recharge.items.inAppPurchase.symbol.product')}</b>
                                            <span>{t('home.recharge.items.inAppPurchase.symbol.description')}</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <div>
                                        <AppleConfirm />
                                        <span>{t('home.recharge.items.inAppPurchase.symbol.confirm')}</span>
                                    </div>
                                </div>
                            </div>

                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.inAppPurchase.title')}</h4>
                            <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.inAppPurchase.description')}</p>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <div id='container-recharge-battery-address'>
                                <div>
                                    IGFsc28gZG9uJ3Qgc2VlbSB0byBiZSBhYmxlIHGxlIHR3byB2YBhYmxlIHGxBhYmxlIHGx<span>battery.ton</span>1ZXMgdG9nZXRoZXIgbGBhYmxlIHGxcHggKiAxMHB4IDEwMCUuCgpJIG9yIDVweCAqIDEwMCUuCgpJIGFsc28gZG9uJ3Qgc2VlbSB0byBiZSBhYmxlIHGxlIHR3byB2YBhYmxlIHGxBhYmxlIHGx
                                </div>
                            </div>

                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.wallet.title')}</h4>
                            <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.recharge.items.wallet.description')}</p>
                        </Card>
                    </li>
                </ul>
            </section>
            <HorizontalRule />
        </>
    );
};

const Security = () => {
    const { t } = useTranslation();
    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-security'>
                <h3>{t('home.security.title')}</h3>
                <p>{t('home.security.description')}</p>

                <ul>
                    <li>
                        <GlobeIcon />
                        <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.security.items.accessible.title')}</h4>
                        <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.security.items.accessible.description')}</p>
                    </li>

                    <li>
                        <SecurityIcon />
                        <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.security.items.security.title')}</h4>
                        <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.security.items.security.description')}</p>
                    </li>
                </ul>
            </section>
            <HorizontalRule />
        </>
    );
};

const Plans = () => {
    const { t } = useTranslation();
    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-plans'>
                <h3>{t('home.plans.title')}</h3>
                <p>{t('home.plans.description')}</p>
                <ul>
                    <li>
                        <Card>
                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.plans.items.small.title')}</h4>
                            <Battery percentage={20} />
                            <span>{t('home.plans.charges', 101)}</span>
                            <a href='#'>$6.99</a>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.plans.items.medium.title')}</h4>
                            <Battery percentage={50} />
                            <span>{t('home.plans.charges', 228)}</span>
                            <a href='#'>$12.99</a>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.plans.items.large.title')}</h4>
                            <Battery percentage={90} />
                            <span>{t('home.plans.charges', 354)}</span>
                            <a href='#'>$19.99</a>
                        </Card>
                    </li>
                </ul>
            </section>
            <HorizontalRule />
        </>
    );
};

const Comparison = () => {
    const { t } = useTranslation();
    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-comparison'>
                <h3>{t('home.comparison.title')}</h3>
                <p>{t('home.comparison.description')}</p>

                <ul>
                    <li>
                        <span ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>🔋</span>
                        <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.comparison.items.battery.title')}</h4>
                        <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.comparison.items.battery.description')}</p>
                        <ul ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>
                            <li>
                                <FaSolidCheck />
                                <span>{t('home.comparison.items.battery.pros')[0]}</span>
                            </li>
                            <li>
                                <FaSolidCheck />
                                <span>{t('home.comparison.items.battery.pros')[1]}</span>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>🔥</span>
                        <h4 ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.comparison.items.w5.title')}</h4>
                        <p ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>{t('home.comparison.items.w5.description')}</p>
                        <ul ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>
                            <li>
                                <FaSolidCheck />
                                <span>{t('home.comparison.items.w5.pros')[0]}</span>
                            </li>
                            <li>
                                <FaSolidXmark />
                                <span>{t('home.comparison.items.w5.cons')[0]}</span>
                            </li>
                            <li>
                                <FaSolidXmark />
                                <span>{t('home.comparison.items.w5.cons')[1]}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <HorizontalRule />
        </>
    );
};

const FAQ = () => {
    const { t } = useTranslation();
    const { setAnimationTargets } = useAnimation();

    return (
        <>
            <section class='tk-section' id='section-FAQ'>
                <h3>{t('home.FAQ.title')}</h3>

                <div>
                    <ul>
                        <For each={t('home.FAQ.items')}>
                            {(item) => {
                                const [isExpanded, setIsExpanded] = createSignal(false);

                                return (
                                    <li ref={el => setAnimationTargets((p: any) => [...p, el])} data-animation='fadeInUp'>
                                        <button onClick={() => setIsExpanded(!isExpanded())}>
                                            <span>{item.title}</span>
                                            <Show when={isExpanded()} fallback={<FaSolidChevronDown />}>
                                                <FaSolidChevronUp />
                                            </Show>
                                        </button>
                                        <Collapse value={isExpanded()} class='collapse-animation'>
                                            <p>{item.description}</p>
                                        </Collapse>
                                    </li>
                                )
                            }}
                        </For>
                    </ul>

                    <div>
                        <a href='https://tonkeeper.helpscoutdocs.com/'>
                            <Card>
                                <FAQIcon />
                                <h4>{t('home.FAQ.platform.title')}</h4>
                                <p>{t('home.FAQ.platform.description')}</p>
                            </Card>
                        </a>
                    </div>
                </div>
            </section>
            <HorizontalRule />
        </>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer id='main-footer'>
            <div>
                <div id='main-footer-menu'>
                    <div>
                        <span>{t('home.footer.menu.company.title')}</span>
                        <nav>
                            <ul>
                                <li><a href='https://t.me/tonkeeper_news'>{t('home.footer.menu.company.items.news')}</a></li>
                                <li><a href='https://t.me/tonkeeperdev'>{t('home.footer.menu.company.items.chat')}</a></li>
                                <li><a href='https://twitter.com/tonkeeper'>{t('home.footer.menu.company.items.twitter')}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <span>{t('home.footer.menu.resources.title')}</span>
                        <nav>
                            <ul>
                                <li><a href='https://tonkeeper.helpscoutdocs.com/'>{t('home.footer.menu.resources.items.faq')}</a></li>
                                <li><a href='https://t.me/help_tonkeeper_bot'>{t('home.footer.menu.resources.items.support')}</a></li>
                                <li><a href='https://t.me/help_tonkeeper_bot'>{t('home.footer.menu.resources.items.suggest')}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <span>{t('home.footer.menu.developers.title')}</span>
                        <nav>
                            <ul>
                                <li><a href='https://github.com/tonkeeper/wallet-api'>{t('home.footer.menu.developers.items.documentation')}</a></li>
                                <li><a href='https://t.me/help_tonkeeper_bot'>{t('home.footer.menu.developers.items.bugBounty')}</a></li>
                                <li><a href='https://github.com/tonkeeper'>{t('home.footer.menu.developers.items.github')}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <span>{t('home.footer.menu.legal.title')}</span>
                        <nav>
                            <ul>
                                <li><a href='https://tonkeeper.com/terms'>{t('home.footer.menu.legal.items.terms')}</a></li>
                                <li><a href='https://tonkeeper.com/privacy'>{t('home.footer.menu.legal.items.privacy')}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <a target="_blank" href="https://ton.app/wallets/tonkeeper">
                    <img src="https://ton.app/a2/badge/topapp?appName=tonkeeper" alt="Tonkeeper — #1 Wallet in Ton App" loading="lazy" />
                </a>
            </div>

            <div>
                <span>{t('home.footer.copyright.primary')}</span>
                <span>{t('home.footer.copyright.secondary')}</span>
            </div>
        </footer>
    );
};

const Home: Component = () => {
    const { lang } = useParams();
    const navigate = useNavigate();

    const [locale, setLocale] = createSignal<Locale>((lang ?? 'en') as Locale);

    const [dict] = createResource(locale, fetchDictionary, {
        initialValue: i18n.flatten(en_dict),
    });

    document.querySelector('html')?.setAttribute('dir', localeDirections[lang as Locale] ?? 'ltr')

    dict();

    const t = i18n.translator(dict);

    const [animationTargets, setAnimationTargets] = createSignal<Element[]>([]);

    createIntersectionObserver(animationTargets, (entries, observer) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                observer.unobserve(e.target);
                e.target.classList.add('animate__animated', `animate__${e.target.getAttribute('data-animation')}`);
            }
        });
    });

    return (
        <Suspense>
            <Show when={dict()}>
                <Title>{t('home.title')}</Title>
                <Meta name="description" content={t('home.description')} />

                <AnimationProvider value={{ setAnimationTargets }}>
                    <TranslationProvider value={{ t, locale, setLocale }}>
                        <Header navigate={navigate} />
                        <IntegratedTransfers />
                        <Recharge />
                        <Security />
                        <Plans />
                        <Comparison />
                        <FAQ />
                        <Footer />
                    </TranslationProvider>
                </AnimationProvider>
            </Show>
        </Suspense>
    );
}

export default Home;