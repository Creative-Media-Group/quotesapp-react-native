import en from "../localisation/translations/en.json"
// import de from "../localisation/translations/de.json"
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? "en";

export const i18n = new I18n({
    en,
    // de,
});

i18n.defaultLocale = deviceLanguage;
i18n.locale = deviceLanguage;
