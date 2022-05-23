import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { HeaderComponent } from "../../components/header";
import { styles } from "./styles";

export function Home({ navigation }) {
  function handleMonitoring() {
    navigation.navigate("Monitoring");
  }
  function handleTelemetry() {
    navigation.navigate("Telemetry");
  }

  return (
    <View style={styles.container}>
      <HeaderComponent pageName={"HOME"} />

      <TouchableOpacity style={styles.button} onPress={handleMonitoring}>
        <Text style={styles.text}>MONITORAMENTO DA EMPRESA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleTelemetry}>
        <Text style={styles.text}>CONFIGURAÇÃO-TELEMETRIA</Text>
      </TouchableOpacity>
    </View>
  );
}
