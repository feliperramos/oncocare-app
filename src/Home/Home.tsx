import React, { useContext } from "react";
import { Text, View, Button, NativeModules } from "react-native";

import { HomeStyles } from "./styles";
import { LanguageContext } from "../locales";

const Home: React.FC = () => {
  const languagueContext = useContext(LanguageContext);
  const locale = NativeModules.I18nManager.localeIdentifier;

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.logoText}>OncoCare</Text>
      <Text style={HomeStyles.logoText}>{locale}</Text>

      <View style={HomeStyles.authContainer}>
        <Button title={"Login"} />
        <Button color="green" title={"Register"} />
      </View>
    </View>
  );
};

export default Home;
