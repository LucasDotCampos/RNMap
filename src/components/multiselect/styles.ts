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
        marginLeft: 20,
        fontSize: 30,
        color: "black",
        fontWeight: "500",
        fontFamily: fonts.BebasNeue400,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 5,
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
        marginLeft: 80,
        width: "40%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        padding: 10,
        textAlign: "center",
        fontFamily: fonts.BebasNeue400,
        fontSize: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    largeInput: {
        width: "96%",
        height: 32,
        margin: 12,
        borderWidth: 1.3,
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
