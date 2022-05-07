import { StyleSheet } from "react-native";
import { fonts } from "../../globalstyles/fonts";
export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: "#4184fe",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        textAlign: "center",
        fontSize: 17,
        color: "#fff",
        fontFamily: fonts.BebasNeue400,
    },
    icon: {
        fontSize: 26,
        color: "#fff",
        fontFamily: fonts.BebasNeue400,
    },
    textbox: {
        flex: 1,
    },
    textbox2: {
        flex: 2,
    },
    iconbox: {
        flex: 1,
        alignItems: "center",
    },
});
