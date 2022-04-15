import React, { useState, createContext, useContext } from "react";
import { NativeModules, Platform } from "react-native";

import pt_BR from "../messages/pt.json";
import es_ES from "../messages/es.json";
import en_US from "../messages/en.json";

const resources = {
  pt_BR: pt_BR,
  es_ES: es_ES,
  en_US: en_US,
};

const SystemLanguage = () =>
  Platform.OS === "android"
    ? NativeModules.I18nManager.localeIdentifier
    : NativeModules.SettingsManager.settings.AppleLocale;

export const LanguageContext = createContext({
  dictionary: resources[NativeModules.I18nManager.localeIdentifier],
});

export const LanguageProvider = ({ children }) => {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.dictionary);

  const provider = {
    language,
    setLanguage: selectedLanguage => {
      setLanguage(selectedLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
