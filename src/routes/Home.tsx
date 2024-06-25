import './Home.scss';

import * as i18n from "@solid-primitives/i18n";

import { Component, createResource, createSignal } from 'solid-js';
import { Locale, fetchDictionary, localeFlags, locales } from '../locale.ts';
import { TranslationProvider, useTranslation } from "../contexts/TranslationContext.ts";

import { FiGlobe } from 'solid-icons/fi'
import LottieAnimation from '../components/LottieAnimation';
import TKSelect from '../components/TKSelect';
import { dict as en_dict } from "../i18n/en.ts";

console.log(LottieAnimation);

const Header: Component = () => {
    const { t } = useTranslation();

    const localeItems = Object.fromEntries(
        locales.map(locale => [
            locale.toString(),
            `${localeFlags[locale]} ${t(`locales.${locale}`)}`,
        ])
    );

    const [langSelectValue, setlangSelectValue] = createSignal<string | null>(null, { equals: false });

    return (
        <>
            <div id='top-fade'></div>
            <div id='main-header'>
                <nav>
                    <ul>
                        <li><a href='https://tonkeeper.com/'>{t('home.header.menu.home')}</a></li>
                        <li><a href=''>{t('home.header.menu.faq')}</a></li>
                        <li><a href='https://t.me/help_tonkeeper_bot'>{t('home.header.menu.support')}</a></li>
                        <li><a href='https://github.com/tonkeeper'>{t('home.header.menu.github')}</a></li>
                    </ul>
                </nav>

                <TKSelect
                    items={localeItems}
                    placeholder={t('home.header.language')}
                    icon={<FiGlobe size={22} />}
                    value={langSelectValue.toString()}
                    onChange={(value) => { setlangSelectValue(value); }}
                />
            </div>
        </>
    );
};

const Home: Component = () => {
    const [locale, setLocale] = createSignal<Locale>("en");

    const [dict] = createResource(locale, fetchDictionary, {
        initialValue: i18n.flatten(en_dict),
    });

    dict();

    const t = i18n.translator(dict);

    return (
        <TranslationProvider value={{ t, locale, setLocale }}>
            <Header />
        </TranslationProvider>
    );
}

export default Home;