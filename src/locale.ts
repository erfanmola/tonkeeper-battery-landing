import type * as en from "./i18n/en.ts";
import * as i18n from "@solid-primitives/i18n";

import { dict as ar_dict } from "./i18n/ar.ts";
import { dict as en_dict } from "./i18n/en.ts";
import { dict as es_dict } from "./i18n/es.ts";
import { dict as fa_dict } from "./i18n/fa.ts";
import { dict as hi_dict } from "./i18n/hi.ts";
import { dict as id_dict } from "./i18n/id.ts";
import { dict as ru_dict } from "./i18n/ru.ts";
import { dict as zhHans_dict } from "./i18n/zh-Hans.ts";

const locales = [
    "en",
    "ru",
    "fa",
    "ar",
    "es",
    "id",
    "hi",
    "zhHans",
] as const;

const localeFlags: { [key in Locale]: string } = {
    'en': '🇺🇸',
    'fa': '🇮🇷',
    'ru': '🇷🇺',
    'ar': '🇦🇪',
    'es': '🇪🇸',
    'id': '🇮🇩',
    'hi': '🇮🇳',
    'zhHans': '🇨🇳',
};

const localeDirections: { [key in Locale]: string } = {
    'en': 'ltr',
    'fa': 'rtl',
    'ru': 'ltr',
    'ar': 'rtl',
    'es': 'ltr',
    'id': 'ltr',
    'hi': 'ltr',
    'zhHans': 'ltr',
};

function fetchDictionary(locale: Locale): Dictionary {
    let dict: RawDictionary;

    switch (locale) {
        case 'fa':
            dict = fa_dict;
            break;
        case 'ar':
            dict = ar_dict;
            break;
        case 'ru':
            dict = ru_dict;
            break;
        case 'es':
            dict = es_dict;
            break;
        case 'id':
            dict = id_dict;
            break;
        case 'hi':
            dict = hi_dict;
            break;
        case 'zhHans':
            dict = zhHans_dict;
            break;
        default:
            dict = en_dict;
            break;
    }

    return i18n.flatten(dict);
}

export type Locale = typeof locales[number];
export type RawDictionary = typeof en.dict;
export type Dictionary = i18n.Flatten<RawDictionary>;

export {
    locales,
    localeFlags,
    localeDirections,
    fetchDictionary,
}