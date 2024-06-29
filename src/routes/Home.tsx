import './Home.scss';

import * as i18n from "@solid-primitives/i18n";

import { Component, For, Show, createMemo, createResource, createSignal } from 'solid-js';
import { FaSolidChevronDown, FaSolidChevronUp } from "solid-icons/fa";
import { Locale, fetchDictionary, localeDirections, localeFlags, locales } from '../locale.ts';
import { Navigator, useNavigate, useParams } from '@solidjs/router';
import { TranslationProvider, useTranslation } from "../contexts/TranslationContext.ts";

import AppleConfirm from '../assets/svg/apple-confirm.svg';
import Battery from '../components/Battery.tsx';
import Card from '../components/Card.tsx';
import { Collapse } from 'solid-collapse';
import { FiGlobe } from 'solid-icons/fi'
import HorizontalRule from '../components/HorizontalRule.tsx';
import LottieAnimation from '../components/LottieAnimation';
import { SolidTyper } from "solid-typer";
import TKSelect from '../components/TKSelect';
import TonLogo from '../assets/svg/ton.svg';
import TonkeeperLogo from '../assets/svg/tonkeeper.svg';
import USDTLogo from '../assets/svg/usdt.svg';
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

    return (
        <>
            <div id='top-fade'></div>
            <div id='main-header'>
                <div id='main-header-menu'>
                    <nav>
                        <ul>
                            <li><a href='https://tonkeeper.com/'>{t('home.header.menu.home')}</a></li>
                            <li><a href=''>{t('home.header.menu.faq')}</a></li>
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
                        <SolidTyper
                            className='header-auto-typer'
                            text={t('home.header.hero.typewriter')}
                            backspaceSpeed={50}
                            typingSpeed={75}
                            loop={true}
                            cursor={true}
                            typingPause={5000}
                        />
                        <p>{t('home.header.hero.description')}</p>
                    </div>

                    <div style={{ display: 'flex', "flex-direction": 'column' }}>
                        <LottieAnimation lottie='assets/tgs/Emerald.tgs' />
                    </div>
                </div>
            </div>
            <HorizontalRule />
        </>
    );
};

const IntegratedTransfers = () => {
    const { t } = useTranslation();

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
                                    <h4>{t('home.integratedTransfers.items.NOT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.NOT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/NFT.tgs' loop={false} />
                                    <h4>{t('home.integratedTransfers.items.NFT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.NFT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/USDT.tgs' loop={false} />
                                    <h4>{t('home.integratedTransfers.items.USDT.title')}</h4>
                                </div>
                                <p>{t('home.integratedTransfers.items.USDT.subtitle')}</p>
                            </Card>
                        </li>

                        <li>
                            <Card>
                                <div>
                                    <LottieAnimation lottie='/assets/tgs/TON.tgs' loop={false} />
                                    <h4>{t('home.integratedTransfers.items.TON.title')}</h4>
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
                                    <span>Recharge with USDT</span>
                                </div>

                                <div>
                                    <TonLogo />
                                    <span>Recharge with TON</span>
                                </div>
                            </div>

                            <h4>{t('home.recharge.items.crypto.title')}</h4>
                            <p>{t('home.recharge.items.crypto.description')}</p>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <div id='container-recharge-in-app-purchase'>
                                <div>
                                    <div>
                                        <b>Apple Pay</b>
                                        <span>Cancel</span>
                                    </div>

                                    <div>
                                        <div>
                                            <TonkeeperLogo />
                                        </div>

                                        <div>
                                            <b>Small Pack</b>
                                            <span>Tonkeeper - TON Wallet</span>
                                        </div>
                                    </div>

                                    <hr />

                                    <div>
                                        <AppleConfirm />
                                        <span>Confirm with Side Button</span>
                                    </div>
                                </div>
                            </div>

                            <h4>{t('home.recharge.items.inAppPurchase.title')}</h4>
                            <p>{t('home.recharge.items.inAppPurchase.description')}</p>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <div id='container-recharge-battery-address'>
                                <div>
                                    IGFsc28gZG9uJ3Qgc2VlbSB0byBiZSBhYmxlIHGxlIHR3byB2YBhYmxlIHGxBhYmxlIHGx<span>battery.ton</span>1ZXMgdG9nZXRoZXIgbGBhYmxlIHGxcHggKiAxMHB4IDEwMCUuCgpJIG9yIDVweCAqIDEwMCUuCgpJIGFsc28gZG9uJ3Qgc2VlbSB0byBiZSBhYmxlIHGxlIHR3byB2YBhYmxlIHGxBhYmxlIHGx
                                </div>
                            </div>

                            <h4>{t('home.recharge.items.wallet.title')}</h4>
                            <p>{t('home.recharge.items.wallet.description')}</p>
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

    return (
        <>
            <section class='tk-section'>
                <h3>{t('home.comparison.title')}</h3>
                <p>{t('home.comparison.description')}</p>
            </section>
            <HorizontalRule />
        </>
    );
};

const Plans = () => {
    const { t } = useTranslation();

    return (
        <>
            <section class='tk-section' id='section-plans'>
                <h3>{t('home.plans.title')}</h3>
                <p>{t('home.plans.description')}</p>
                <ul>
                    <li>
                        <Card>
                            <h4>{t('home.plans.items.small.title')}</h4>
                            <Battery percentage={20} />
                            <span>{t('home.plans.charges', 101)}</span>
                            <a href='#'>$6.99</a>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <h4>{t('home.plans.items.medium.title')}</h4>
                            <Battery percentage={50} />
                            <span>{t('home.plans.charges', 228)}</span>
                            <a href='#'>$12.99</a>
                        </Card>
                    </li>

                    <li>
                        <Card>
                            <h4>{t('home.plans.items.large.title')}</h4>
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

const Security = () => {
    const { t } = useTranslation();

    return (
        <>
            <section class='tk-section' id='section-security'>
                <div>
                    <h3>{t('home.security.title')}</h3>
                    <p>{t('home.security.description')}</p>
                </div>

                <LottieAnimation lottie='/assets/tgs/Globe.tgs' />
            </section>
            <HorizontalRule />
        </>
    );
};

const FAQ = () => {
    const { t } = useTranslation();

    return (
        <>
            <section class='tk-section' id='section-FAQ'>
                <div>
                    <h3>{t('home.FAQ.title')}</h3>

                    <ul>
                        <For each={t('home.FAQ.items')}>
                            {(item) => {
                                const [isExpanded, setIsExpanded] = createSignal(false);

                                return (
                                    <li>
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

                    <a href='https://tonkeeper.helpscoutdocs.com/'>{t('home.FAQ.note')}</a>
                </div>

                <div>
                    <LottieAnimation lottie='/assets/tgs/FAQ.tgs' loop={false} />
                </div>
            </section>
            <HorizontalRule />
        </>
    );
};

const Footer = () => {
    return (
        <section>
            Footer
        </section>
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

    return (
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
    );
}

export default Home;