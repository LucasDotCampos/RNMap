import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { setores } from "../../fakeapi";
import { HeaderComponent } from "./../../components/header";
import { styles } from "./styles";
import { SelectMultiple } from "./../../components/multiselect";
import { useSectorsContext } from "../../context/SectorsProvider";
import { useStoppingContext } from "../../context/StoppingProvider";
import { useCategoriesContext } from "../../context/CategoriesProvider";

export default function TelemetrySettings({ navigation }) {
  const [paradaTempoLimiteBranco, setParadaTempoLimiteBranco] = useState("");
  const [paradaTempoLimiteAmarelo, setParadaTempoLimiteAmarelo] = useState("");
  const [paradaTempoLimiteVermelho, setParadaTempoLimiteVermelho] =
    useState("");
  const [refugoVlrLimiteBranco, setRefugoVlrLimiteBranco] = useState("");
  const [refugoVlrLimiteAmarelo, setRefugoVlrLimiteAmarelo] = useState("");
  const [refugoVlrLimiteVermelho, setRefugoVlrLimiteVermelho] = useState("");
  const [refugoProdReferencia, setRefugoProdReferencia] = useState("");
  const { sectors } = useSectorsContext();
  const { stopping } = useStoppingContext();
  const { categories } = useCategoriesContext();

  const handleData = () => {
    const payload = {
      setoresSelecionados: sectors.map((sector) => ({
        cdSetor: sector.cdSetor,
      })),
      paradasPorCategoria: categories.map((category) => {
        return {
          idCatPar: category.idCatPar,
          paradas: stopping.map((stop) => stop.cdParada),
        };
      }),
      paradaTempoLimiteBranco,
      paradaTempoLimiteAmarelo,
      paradaTempoLimiteVermelho,
      refugoVlrLimiteBranco,
      refugoVlrLimiteAmarelo,
      refugoVlrLimiteVermelho,
      refugoProdReferencia,
    };
    // console.log(payload);
  };

  function goToCategory() {
    navigation.navigate("Category");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent pageName={"CONFIGURAÇÃO-TELEMETRIA"} />

        <View style={styles.sector}>
          <Text style={styles.text}>Selecione o Setor:</Text>

          <SelectMultiple options={setores.setores} />
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
                      onChangeText={(text) => setParadaTempoLimiteBranco(text)}
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>AMARELO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setParadaTempoLimiteAmarelo(text)}
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>VERMELHO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) =>
                        setParadaTempoLimiteVermelho(text)
                      }
                    />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.text}>CONFIGURAÇÃO TIPO DE PARADA</Text>
              <View style={styles.block}>
                <View style={styles.mainInputContainer}>
                  <Text style={styles.inputText}>Category</Text>
                  <TouchableOpacity onPress={goToCategory}>
                    <View style={styles.mainInput}>
                      <Text numberOfLines={1}>Categoria Selecionada</Text>
                      <Ionicons
                        name="chevron-down"
                        size={20}
                        style={styles.icon}
                      />
                    </View>
                  </TouchableOpacity>
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
                      onChangeText={(text) => setRefugoVlrLimiteBranco(text)}
                    />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>AMARELO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setRefugoVlrLimiteAmarelo(text)}
                    />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>VERMELHO:</Text>
                    <TextInput
                      style={styles.inputBlock}
                      onChangeText={(text) => setRefugoVlrLimiteVermelho(text)}
                    />
                  </View>
                </View>

                <View style={styles.productionInputLine}>
                  <Text style={styles.inputText}>PRODUÇÃO:</Text>
                  <TextInput
                    style={styles.production}
                    onChangeText={(text) => setRefugoProdReferencia(text)}
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
