import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";
import { StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    margin: 10,
  },
  sector: {
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    margin: 25,
  },
  segText: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 15,
  },
  inputText: {
    fontSize: 23,
    fontFamily: fonts.BebasNeue400,
  },
  largeInput: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  inputBlock: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  inputLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  block: {
    backgroundColor: "#F0F0F0",
    width: 380,
    height: 265,
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 25,
  },
  lineBlocks: {
    flexDirection: "column",
  },
});
