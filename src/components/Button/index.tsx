import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { ButtonStyle } from "./styles";

interface ButtonProps {
  type: string;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <View style={ButtonStyle.container}>
      {
        {
          primary: (
            <TouchableOpacity style={ButtonStyle.buttonPrimary}>
              <Text style={ButtonStyle.textPrimary}>{text}</Text>
            </TouchableOpacity>
          ),
          secondary: (
            <TouchableOpacity style={ButtonStyle.buttonSecondary}>
              <Text style={ButtonStyle.textSecondary}>{text}</Text>
            </TouchableOpacity>
          ),
          alternative: (
            <TouchableOpacity style={ButtonStyle.altertiveButton}>
              <Text style={ButtonStyle.alternativeText}>{text}</Text>
            </TouchableOpacity>
          ),
        }[type]
      }
    </View>
  );

  // {
  //   primmary: (
  //     <TouchableOpacity style={ButtonStyle.buttonPrimary}>
  //       {title}
  //     </TouchableOpacity>
  //   ),
  // }[type];
};

export default ButtonComponent;
