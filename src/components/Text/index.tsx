import React from "react";
import { Text, View } from "react-native";

import { TextStyle } from "./styles";

interface TextProp {
  type: string;
  text: string;
}

const TextComponent: React.FC<TextProp> = ({ type, text }) => {
  return (
    <View>
      {
        {
          title: <Text style={TextStyle.title}>{text}</Text>,
          text: <Text style={TextStyle.text}>{text}</Text>,
          slogan: <Text style={TextStyle.slogan}>{text}</Text>,
        }[type]
      }
    </View>
  );
};

export default TextComponent;
