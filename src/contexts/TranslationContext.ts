import { Accessor, createContext, useContext } from 'solid-js';

import { Locale } from '../locale';

type TranslationContextType = {
    t: (key: any, params?: any) => any;
    locale: Accessor<Locale>;
    setLocale: (key: any) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = TranslationContext.Provider;

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslation must be used within a TranslationProvider");
    }
    return context;
};
