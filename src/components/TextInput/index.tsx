import React from "react";
import { TextInput, KeyboardType, TextInputProps } from "react-native";

import { TextInputStyle } from "./styles";

interface TextInputProp {
  type: KeyboardType | undefined;
  placeholder?: string | undefined;
  onChange: (text: string) => void | undefined;
  passwordField?: boolean;
}

const TextInputComponent: React.FC<TextInputProp> = ({
  type,
  placeholder,
  onChange,
  passwordField,
}) => {
  return (
    <TextInput
      style={TextInputStyle.input}
      keyboardType={type}
      placeholder={placeholder}
      onChangeText={onChange}
      placeholderTextColor="#7EE5B1"
      secureTextEntry={passwordField}
    />
  );
};

export default TextInputComponent;
