import { StyleSheet } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  checkedIcon: {
    width: 13.5,
    height: 12.5,
    marginTop: 0.5,
    marginBottom: 4,
    marginLeft: 4,
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
