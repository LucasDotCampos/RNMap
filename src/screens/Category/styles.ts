import { StatusBar, StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },

  header: {
    width: "100%",
    backgroundColor: "#4184fe",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // Go to Telemetry Button
  backButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  backButtonText: {
    fontSize: 40,
    color: "#4184fe",
    fontWeight: "500",
    fontFamily: fonts.BebasNeue400,
  },

  // Center Search Input
  searchView: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  searchIcon: {
    position: "relative",
  },
  input: {
    borderRadius: 8,
    textAlign: "center",
    fontFamily: fonts.BebasNeue400,
    fontSize: 20,
    borderWidth: 0,
  },

  // Right Button
  sendButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  sendButtonText: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    color: "#4184FE",
  },

  // Flat list
  flatList: {
    fontSize: 21,
    fontWeight: "500",
    color: "#000",
    fontFamily: fonts.BebasNeue400,
    textAlign: "center",
    padding: 10,
    margin: 2,
    alignItems: "center",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
  },
});
