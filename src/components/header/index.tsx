import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

function HeaderComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PAM PLÁSTICOS</Text>
      <Text style={styles.text}>CONFIGURAÇÃO-TELEMETRIA</Text>
      <Text style={styles.logo}>MAP-TECHNOLOGY</Text>
    </View>
  );
}

export default HeaderComponent;
