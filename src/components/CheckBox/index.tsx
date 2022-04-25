//import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CheckBoxStyle } from "./styles";

interface CheckProp {
  text: string;
}

const CheckBoxComponent: React.FC<CheckProp> = ({ text }) => {
  return (
    <View style={CheckBoxStyle.container}>
      <TouchableOpacity style={CheckBoxStyle.checkbox} />
      <Text style={CheckBoxStyle.text}>{text}</Text>
    </View>
  );
};

export default CheckBoxComponent;
