import { Alert } from "react-native";

export const SelectedAlert = (item) =>
    Alert.alert("info", "selecionados", [
        {
            text: "look in the console",
            onPress: () => console.log(item),
        },
    ]);
