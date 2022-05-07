import { PixelRatio, StyleSheet } from "react-native";
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
        fontSize: 20,
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
        fontSize: 23,
        fontFamily: fonts.BebasNeue400,
    },

    icon: {
        position: "absolute",
        right: 10,
        top: 6,
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
    production: {
        width: 120,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        width: 360,
        height: 265,
        borderWidth: 1,
        borderRadius: 10,
        padding: 30,
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 25,
        margin: 10,
    },
    flexEndBlock: {
        alignItems: "flex-end",
    },
    lineBlocks: {
        flexDirection: "column",
    },

    button: {
        backgroundColor: "#4184FE",
        alignItems: "center",
        width: "50%",
        marginTop: 5,
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
