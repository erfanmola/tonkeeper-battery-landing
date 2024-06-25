import type * as en from "./i18n/en.ts";
import * as i18n from "@solid-primitives/i18n";

const locales = ["en", "ru", "fa", "ar"] as const;

const localeFlags: { [key in Locale]: string } = {
    'en': '🇺🇸',
    'fa': '🇮🇷',
    'ru': '🇷🇺',
    'ar': '🇦🇪',
};

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`./i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict);
}

export type Locale = typeof locales[number];
export type RawDictionary = typeof en.dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

export {
    locales,
    localeFlags,
    fetchDictionary
}