import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";

import { Text, TextInput, Button } from "../../../components";

import { ForgotPasswordStyle } from "./styles";

import { ValidationEmail } from '../../../utils'

type forgotPasswordScreenProp = StackNavigationProp<RootStackList, "ForgotPassword">;

const ForgotPassword: React.FC = () => {
  const [state, setState] = useState("");
  const [error, setError] = useState(true);
  const { t } = useTranslation("forgotPassword");
  const styles = ForgotPasswordStyle;

  const onPasswordComplete = (y: string) => {
    console.log(y)
    const validate = ValidationEmail(y);
    console.log(validate)

    if (y) {
      setError(validate)
    } else {

    }



    y && setError(validate)
  }

  return (
    <View style={styles.container}>
      <View style={styles.forgotTextContainer}>
        <Text text="digite seu email para recuperar a senha" type="text" />
        <TextInput type="email-address" onChange={(text) => onPasswordComplete(text)} placeholder="email" error={error} />
      </View>

      <View style={styles.buttonContainer}>
        <Button type="primary" text="enviar" onPress={() => console.log("Reset Password")} />
      </View>
    </View>
  );
};

export default ForgotPassword;
