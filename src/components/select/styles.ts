import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
