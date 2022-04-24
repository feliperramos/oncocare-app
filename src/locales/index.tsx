import { NativeModules, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import i18n, { Module } from "i18next";
import { initReactI18next } from "react-i18next";

import pt_BR from "../messages/pt.json";
import es_ES from "../messages/es.json";
import en_US from "../messages/en.json";

const resources = {
  ["pt-BR"]: pt_BR,
  ["es-ES"]: es_ES,
  ["en-US"]: en_US,
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (callback: (arg0: string) => any) => {
    const storedLanguage = await AsyncStorage.getItem("language");
    if (storedLanguage) return callback(storedLanguage);

    let phoneLanguage = null;
    if (Platform.OS === "android") {
      phoneLanguage = NativeModules.I18nManager.localeIdentifier;
    } else {
      NativeModules.SettingsManager.settings.AppleLocale;
    }

    phoneLanguage = phoneLanguage.replace("_", "-");

    return callback(phoneLanguage);
  },
  init: () => {},
  cacheUserLanguage: (language: string) =>
    AsyncStorage.setItem("language", language),
} as Module;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v3",
    fallbackLng: "en-US",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
