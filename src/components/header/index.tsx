import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

function HeaderComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PAM PLÁSTICOS</Text>
            <Text style={styles.text}>CONFIGURAÇÃO-TELEMETRIA</Text>
            <TouchableOpacity>
                <Ionicons name="menu" size={25} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

export default HeaderComponent;
