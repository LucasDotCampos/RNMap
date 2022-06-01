import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";
import { StatusBar } from "react-native";
import { Roboto_100Thin } from "@expo-google-fonts/roboto";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: fonts.BebasNeue400,
  },
  sector: {
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    margin: 12,
  },
  segText: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 15,
  },
  inputText: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 19,
  },

  icon: {
    position: "absolute",
    right: 10,
    top: 6,
  },
  inputBlock: {
    width: 200,
    height: 32,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontFamily: fonts.BebasNeue400,
  },

  inputLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  production: {
    width: 120,
    height: 32,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  productionInputLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    backgroundColor: "#F0F0F0",
    width: 350,
    height: 250,
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    margin: 10,
  },
  flexEndBlock: {
    alignItems: "flex-end",
  },
  lineBlocks: {
    flexDirection: "row",
  },
  mainInputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainInput: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 200,
    height: 32,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontFamily: fonts.BebasNeue400,
  },
  button: {
    backgroundColor: "#4184FE",
    alignItems: "center",
    padding: Roboto_100Thin,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
  },
  sendButtonText: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    margin: 10,
    color: "#fff",
  },
});
