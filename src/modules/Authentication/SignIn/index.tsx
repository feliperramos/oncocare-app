import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";
import { useNavigation } from "@react-navigation/native";

import { Text, TextInput, Button } from "../../../components";

import { SignInStyles } from "./styles";

type signInScreenProp = StackNavigationProp<RootStackList, "SignIn">;

const SignIn: React.FC = () => {
  const [state, setState] = useState("");
  const { t } = useTranslation("signIn");
  const navigation = useNavigation<signInScreenProp>();

  return (
    <View style={SignInStyles.container}>
      <TextInput
        placeholder={t("fieldEmail")}
        type="email-address"
        onChange={setState}
      />
      <TextInput
        placeholder={t("fieldPassword")}
        type="default"
        onChange={setState}
        passwordField={true}
      />
      <View style={SignInStyles.authContainer}>
        <Button
          type="primary"
          text={t("signInButton")}
          onPress={() => navigation.navigate("Feed")}
        />
        <Button
          type="alternative"
          text={t("forgotPassword")}
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </View>
    </View>
  );
};

export default SignIn;
