import React from "react";
import { useTranslation } from "react-i18next";
import { View, Image } from "react-native";

import { Text, Button } from "../components";

import { HomeStyles } from "./styles";
import Logo from "../assets/images/Logo.png";

const Welcome: React.FC = () => {
  const { t } = useTranslation("welcome");
  const LOGO_IMAGE = Image.resolveAssetSource(Logo).uri;

  return (
    <View style={HomeStyles.container}>
      <Image source={{ uri: LOGO_IMAGE }} style={HomeStyles.logo} />
      <Text text="Cuidar com carinho" type="slogan" />

      <View style={HomeStyles.authContainer}>
        <Button type="primary" text={t("loginButton")} />
        <Button type="secondary" text={t("registerButton")} />
        <Button type="alternative" text={t("forgotPassword")} />
      </View>
    </View>
  );
};

export default Welcome;
