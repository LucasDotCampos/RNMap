import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "#4184fe",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 21,
    color: "#fff",
    fontFamily: fonts.BebasNeue400,
  },
  logo: {
    fontSize: 13,
    color: "#fff",
    fontFamily: fonts.BebasNeue400,
  },
});
