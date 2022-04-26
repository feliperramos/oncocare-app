import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackList } from "./../../screens";

import { Text, TextInput, Button } from "../../../components";

import { ForgotPasswordStyle } from "./styles";

type signInScreenProp = StackNavigationProp<RootStackList, "SignIn">;

const ForgotPassword: React.FC = () => {
  const [state, setState] = useState("");
  const { t } = useTranslation("signIn");

  return <View></View>;
};

export default ForgotPassword;
