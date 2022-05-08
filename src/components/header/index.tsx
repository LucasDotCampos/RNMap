import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const HeaderComponent = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [server, setServer] = useState("");
  const [port, setPort] = useState("");

  async function handleFinalizar() {
    const newData = {
      server,
      port,
    };
    await AsyncStorage.setItem("@mapapp:config", JSON.stringify(newData));
    const showData = await AsyncStorage.getItem("@mapapp:config");
    ("console.log(JSON.parse(showData));");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text}>PAM PLÁSTICOS</Text>
      </View>
      <View style={styles.textbox2}>
        <Text style={styles.text}>CONFIGURAÇÃO-TELEMETRIA</Text>
      </View>
      <View style={styles.iconbox}>
        <TouchableOpacity onPress={() => setOpenSettings(true)}>
          <Ionicons name="menu" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        animationType="slide"
        onRequestClose={() => setOpenSettings(false)}
        visible={openSettings}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modal_text}>Configurar Servidor</Text>
            <View style={styles.input_container}>
              <Text style={styles.label}>Servidor</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setServer(text)}
              />
            </View>
            <View style={styles.input_container}>
              <Text style={styles.label}>Porta</Text>
              <TextInput
                onChangeText={(text) => setPort(text)}
                style={styles.input}
              />
            </View>
            <Button onPress={handleFinalizar} title="Finalizar" />
          </View>
        </View>
      </Modal>
    </View>
  );
};
