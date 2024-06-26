import './Home.scss';

import * as i18n from "@solid-primitives/i18n";

import { Component, createMemo, createResource, createSignal } from 'solid-js';
import { Locale, fetchDictionary, localeDirections, localeFlags, locales } from '../locale.ts';
import { Navigator, useNavigate, useParams } from '@solidjs/router';
import { TranslationProvider, useTranslation } from "../contexts/TranslationContext.ts";

import { FiGlobe } from 'solid-icons/fi'
import LottieAnimation from '../components/LottieAnimation';
import TKSelect from '../components/TKSelect';
import { dict as en_dict } from "../i18n/en.ts";

console.log(LottieAnimation);

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
                        document.querySelector('html')?.setAttribute('dir', localeDirections[lang as Locale])
                    }}
                />
            </div>
        </>
    );
};

const Home: Component = () => {
    const { lang } = useParams();
    const navigate = useNavigate();

    const [locale, setLocale] = createSignal<Locale>((lang ?? 'en') as Locale);

    const [dict] = createResource(locale, fetchDictionary, {
        initialValue: i18n.flatten(en_dict),
    });

    document.querySelector('html')?.setAttribute('dir', localeDirections[lang as Locale])

    dict();

    const t = i18n.translator(dict);

    return (
        <TranslationProvider value={{ t, locale, setLocale }}>
            <Header navigate={navigate} />
        </TranslationProvider>
    );
}

export default Home;