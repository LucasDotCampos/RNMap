import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    alignItems: "center",
  },
  boxSize: {
    flex: 1,
  },
  titleContainer: { backgroundColor: "#4184fe", margin: 2 },
  titleText: {
    fontSize: 21,
    fontWeight: "500",
    color: "#fff",
    fontFamily: fonts.BebasNeue400,
    textAlign: "center",
    padding: 10,
    margin: 2,
  },
  text: {
    fontSize: 21,
    fontWeight: "500",
    color: "#000",
    fontFamily: fonts.BebasNeue400,
    textAlign: "center",
    padding: 10,
    margin: 2,
  },

  header: {
    backgroundColor: "#4184fe",
    padding: 12,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "500",
    fontFamily: fonts.BebasNeue400,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  searchIcon: {
    position: "relative",
  },
  searchView: {
    width: "18%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  subtitle: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
  },
  input: {
    width: 100,
    borderRadius: 8,
    textAlign: "center",
    fontFamily: fonts.BebasNeue400,
    fontSize: 20,
  },
  mainInput: {
    alignSelf: "flex-end",
    width: 200,
    height: 32,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontFamily: fonts.BebasNeue400,
  },
  item: {
    fontFamily: fonts.BebasNeue400,
    fontSize: 20,
  },
  sendButton: {
    width: "50%",
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    justifyContent: "center",
    borderRadius: 8,
  },
  sendButtonText: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: fonts.BebasNeue400,
    margin: 10,
    color: "#4184FE",
  },
  sendBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  flatListContainer: {
    flex: 1,
    flexDirection: "row",
  },

  flatList: {
    flex: 1,
  },
});
