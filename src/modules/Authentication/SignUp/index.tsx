import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";

import { TextInput, Button, CheckBox } from "../../../components";

import { SignUpStyles } from "./styles";

type signUpScreenProp = StackNavigationProp<RootStackList, "SignIn">;

const SignUp: React.FC = () => {
  const [state, setState] = useState("");
  const { t } = useTranslation("signUp");

  return (
    <View style={SignUpStyles.container}>
      <TextInput
        placeholder={t("fieldEmail")}
        type="email-address"
        onChange={setState}
      />
      <TextInput
        placeholder={t("fieldName")}
        type="default"
        onChange={setState}
      />
      <TextInput
        placeholder={t("fieldPassword")}
        type="default"
        onChange={setState}
        passwordField={true}
      />
      <TextInput
        placeholder={t("fieldPassword2")}
        type="default"
        onChange={setState}
        passwordField={true}
      />
      <View style={SignUpStyles.authContainer}>
        <CheckBox text={t("termsAgreement")} />
        <Button
          type="primary"
          text={t("signUpButton")}
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
};

export default SignUp;