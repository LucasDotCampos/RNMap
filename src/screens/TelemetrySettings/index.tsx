import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { indexList } from "../../fakeapi";
import { HeaderComponent } from "./../../components/header";
import { styles } from "./styles";
import { SelectMultiple } from "./../../components/multiselect";
import { CategoryModal } from "../../components/categoryModal";
import { StoppingModal } from "../../components/stoppingModel";

export default function TelemetrySettings() {
  const [whiteStoppingTime, setWhiteStoppingTime] = useState("");
  const [yellowStoppingTime, setYellowStoppingTime] = useState("");
  const [redStoppingTime, setRedStoppingTime] = useState("");
  const [whiteRefusedParts, setWhiteRefusedParts] = useState("");
  const [yellowRefusedParts, setYellowRefusedParts] = useState("");
  const [redRefusedParts, setRedRefusedParts] = useState("");
  const [production, setProduction] = useState("");

  const handleData = async () => {
    await AsyncStorage.setItem(
      "@mapapp:formData",
      JSON.stringify({
        whiteStoppingTime,
        yellowStoppingTime,
        redStoppingTime,
        whiteRefusedParts,
        yellowRefusedParts,
        redRefusedParts,
        production,
      })
    );
    await AsyncStorage.getItem("@mapapp:formData");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent pageName={"CONFIGURAÇÃO-TELEMETRIA"} />

        <View style={styles.sector}>
          <Text style={styles.text}>Selecione o Setor:</Text>

          <SelectMultiple options={indexList} />
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.lineBlocks}>
            <View>
              <Text style={styles.text}>CONFIGURAÇÃO DO TEMPO DE PARADA</Text>
              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>Branco:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setWhiteStoppingTime(text)}
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>AMARELO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setYellowStoppingTime(text)}
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>VERMELHO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setRedStoppingTime(text)}
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.text}>CONFIGURAÇÃO TIPO DE PARADA</Text>
              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>CATEGORIA:</Text>
                    <CategoryModal options={indexList} />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>PARADA:</Text>
                    <StoppingModal options={indexList} />
                  </View>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.text}>CONFIGURAÇÕES DE PEÇAS REFUGADAS</Text>

              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>BRANCO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setWhiteRefusedParts(text)}
                    />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>AMARELO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setYellowRefusedParts(text)}
                    />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>VERMELHO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setRedRefusedParts(text)}
                    />
                  </View>
                </View>

                <View style={styles.productionInputLine}>
                  <Text style={styles.inputText}>PRODUÇÃO:</Text>
                  <TextInput
                    style={styles.production}
                    onChangeText={(text) => setProduction(text)}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleData}>
          <View>
            <Text style={styles.sendButtonText}>CONCLUIR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
