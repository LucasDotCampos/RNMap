import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
  },
  boxSize: {
    flex: 1,
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
  searchView: {
    width: '20%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
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
  largeInput: {
    width: "96%",
    height: 32,
    margin: 12,
    borderWidth: 1.3,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    justifyContent: 'center'
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
});
