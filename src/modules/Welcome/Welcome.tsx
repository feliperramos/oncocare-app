import React from "react";
import { useTranslation } from "react-i18next";
import { View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "../screens";
import { useNavigation } from "@react-navigation/native";

import { Text, Button } from "../../components";

import { HomeStyles } from "./styles";
import Logo from "../../assets/images/Logo.png";

type welcomeScreenProp = StackNavigationProp<RootStackList, "Welcome">;

const Welcome: React.FC = () => {
  const navigation = useNavigation<welcomeScreenProp>();
  const { t } = useTranslation("welcome");

  return (
    <View style={HomeStyles.container}>
      <Image source={Logo} style={HomeStyles.logo} />
      <Text text="Cuidar com carinho" type="slogan" />

      <View style={HomeStyles.authContainer}>
        <Button
          type="primary"
          text={t("loginButton")}
          onPress={() => navigation.navigate("SignIn")}
        />
        <Button
          type="secondary"
          text={t("registerButton")}
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          type="alternative"
          text={t("forgotPassword")}
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
};

export default Welcome;
