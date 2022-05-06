import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        alignItems: "center",
    },
    text: {
        fontSize: 21,
        fontWeight: "500",
        color: "#000",
        fontFamily: fonts.BebasNeue400,
        textAlign: "center",
        margin: 12,
    },
    header: {
        backgroundColor: "#eee",
        padding: 12,
    },
    header2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    actions: {
        fontSize: 30,
        color: "black",
        fontWeight: "500",
        fontFamily: fonts.BebasNeue400,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 9,
    },
    subtitle: {
        fontFamily: fonts.BebasNeue400,
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        color: "#444",
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#777",
        textAlign: "center",
    },
    input: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        padding: 10,
        textAlign: "center",
        fontFamily: fonts.BebasNeue400,
        fontSize: 20,
        backgroundColor: "#4184fe",
    },
    largeInput: {
        width: "80%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        fontSize: 20,
    },
    item: {
        fontFamily: fonts.BebasNeue400,
        fontSize: 20,
    },
});
