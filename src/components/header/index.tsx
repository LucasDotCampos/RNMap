import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

function HeaderComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.textbox}>
                <Text style={styles.text}>PAM PLÁSTICOS</Text>
            </View>
            <View style={styles.textbox2}>
                <Text style={styles.text}>CONFIGURAÇÃO-TELEMETRIA</Text>
            </View>
            <View style={styles.iconbox}>
                <TouchableOpacity>
                    <Ionicons name="menu" size={25} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderComponent;
