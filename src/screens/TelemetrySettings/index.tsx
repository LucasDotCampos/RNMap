import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { indexList } from "../../fakeapi";

import HeaderComponent from "../../components/header";
import { styles } from "./styles";
import Select from "../../components/select";

export default function TelemetrySettings() {
  function InputResponse() {
    return console.log("trabalhos");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent />

        <View style={styles.sector}>
          <Text style={styles.text}>Selecione o Setor:</Text>
          <Select
            title={"selecione o setor"}
            options={indexList}
            onChangeSelect={(id) => console.log(id)}
          />
        </View>

        <View style={styles.lineBlocks}>
          <Text style={styles.text}>CONFIGURAÇÃO DO TEMPO DE PARADA</Text>

          <View style={styles.block}>
            <View style={styles.flexEndBlock}>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>Branco:</Text>
                <TextInput style={styles.inputBlock} />
                <Text style={styles.segText}>SEG</Text>
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>AMARELO:</Text>
                <TextInput style={styles.inputBlock} />
                <Text style={styles.segText}>SEG</Text>
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>VERMELHO:</Text>
                <TextInput style={styles.inputBlock} />
                <Text style={styles.segText}>SEG</Text>
              </View>
            </View>
          </View>

          <Text style={styles.text}>CONFIGURAÇÃO TIPO DE PARADA</Text>

          <View style={styles.block}>
            <View style={styles.flexEndBlock}>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>CATEGORIA:</Text>
                <TouchableOpacity
                  style={styles.inputBlock}
                  onPress={InputResponse}
                >
                  <Ionicons name="chevron-down" size={25} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>PARADA:</Text>
                <TouchableOpacity
                  style={styles.inputBlock}
                  onPress={InputResponse}
                >
                  <Ionicons name="chevron-down" size={25} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.text}>CONFIGURAÇÕES DE PEÇAS REFUGADAS</Text>

          <View style={styles.block}>
            <View style={styles.flexEndBlock}>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>BRANCO:</Text>
                <TextInput style={styles.inputBlock} />
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>AMARELO:</Text>
                <TextInput style={styles.inputBlock} />
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.inputText}>VERMELHO:</Text>
                <TextInput style={styles.inputBlock} />
              </View>
            </View>

            <View style={styles.productionInputLine}>
              <Text style={styles.inputText}>PRODUÇÃO:</Text>
              <TextInput style={styles.production} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={InputResponse}>
          <View>
            <Text style={styles.sendButtonText}>CONCLUIR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
