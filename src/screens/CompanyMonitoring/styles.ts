import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#4184fe",
    fontWeight: "bold",
  },
  sectorHead: {
    height: 40,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    fontFamily: fonts.BebasNeue400,
    fontSize: 19,
  },
  data: {
    height: 50,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
});
