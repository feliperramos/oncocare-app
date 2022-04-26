//import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { CheckBoxStyle } from "./styles";
import CheckedIcon from "../../assets/images/Checked.png";
interface CheckProp {
  text: string;
  value?: boolean;
  onChange?: () => void;
}

const CheckBoxComponent: React.FC<CheckProp> = ({ text, onChange, value }) => {
  return (
    <TouchableOpacity style={CheckBoxStyle.container} onPress={onChange}>
      <TouchableOpacity onPress={onChange} style={CheckBoxStyle.checkbox}>
        {value ? (
          <Image source={CheckedIcon} style={CheckBoxStyle.checkedIcon} />
        ) : null}
      </TouchableOpacity>
      <Text style={CheckBoxStyle.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CheckBoxComponent;
