import { StatusBar, StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 12,
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: "#fff",
    padding: 12,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions: {
    fontSize: 20,
    color: "#000",
  },
  text: {
    fontSize: 21,
    fontWeight: "500",
    color: "#000",
    fontFamily: fonts.BebasNeue400,
    textAlign: "center",
    margin: 12,
  },
  options: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
  },
  optionsText: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 20,
  },
});
