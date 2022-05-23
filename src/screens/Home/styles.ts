import { StatusBar, StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    color: "#000",
    fontFamily: fonts.BebasNeue400,
    fontSize: 19,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#F0F0F0",
    marginTop: 2,
    paddingVertical: 13,
  },
});
