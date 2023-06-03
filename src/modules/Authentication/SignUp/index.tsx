import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";
import { useNavigation } from "@react-navigation/native";

import { TextInput, Button, CheckBox } from "../../../components";

import { SignUpStyles } from "./styles";

type signUpScreenProp = StackNavigationProp<RootStackList, "SignUp">;

const SignUp: React.FC = () => {
  const [state, setState] = useState("");
  const [check, setCheck] = useState(false);
  const { t } = useTranslation("signUp");
  const navigation = useNavigation<signUpScreenProp>();

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
        <CheckBox
          text={t("termsAgreement")}
          value={check}
          onChange={() => setCheck(!check)}
        />
        <Button
          type="primary"
          text={t("signUpButton")}
          onPress={() => navigation.navigate("Feed")}
        />
      </View>
    </View>
  );
};

export default SignUp;
