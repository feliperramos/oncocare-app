import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";

import { Text, Button } from "../../../components";

import { SignInStyles } from "./styles";

type signInScreenProp = StackNavigationProp<RootStackList, "SignIn">;

const SignIn: React.FC = () => {
  const { t } = useTranslation("welcome");

  return (
    <View style={SignInStyles.container}>
      <Text text="Cuidar com carinho" type="slogan" />
    </View>
  );
};

export default SignIn;
