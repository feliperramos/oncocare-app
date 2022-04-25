import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
// import Checked from "../../assets/svg/Checked.svg"

export const CheckBoxStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#53DC98",
    margin: 4,
  },
  text: {
    color: "#0E1713",
    fontFamily: "Arimo",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    margin: 4,
  },
});
