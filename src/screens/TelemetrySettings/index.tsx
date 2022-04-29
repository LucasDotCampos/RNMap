import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

import HeaderComponent from "../../components/header";
import { styles } from "./styles";

export default function TelemetrySettings() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent />

        <View style={styles.sector}>
          <Text style={styles.text}>Selecione o Setor:</Text>
          <TextInput style={styles.largeInput} />
        </View>
        <View style={styles.lineBlocks}>
          <Text style={styles.text}>CONFIGURAÇÃO DO TEMPO DE PARADA</Text>

          <View style={styles.block}>
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

          <Text style={styles.text}>CONFIGURAÇÃO TIPO DE PARADA</Text>

          <View style={styles.block}>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>CATEGORIA:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>PARADA:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
          </View>

          <Text style={styles.text}>CONFIGURAÇÃO TIPO DE PARADA</Text>

          <View style={styles.block}>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>CATEGORIA:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>PARADA:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>PARADA:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
            <View style={styles.inputLine}>
              <Text style={styles.inputText}>PRODUÇÃO:</Text>
              <TextInput style={styles.inputBlock} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
