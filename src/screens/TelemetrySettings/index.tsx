import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { categorias, paradas, setores } from "../../fakeapi";
import { HeaderComponent } from "./../../components/header";
import { styles } from "./styles";
import { SelectMultiple } from "./../../components/multiselect";
import { CategoryModal } from "../../components/categoryModal";
import { StoppingModal } from "../../components/stoppingModal";
import api from "../../services/api";
import { useSectorsContext } from "../../context/SectorsProvider";
import { useStoppingContext } from "../../context/StoppingProvider";
import { useCategoriesContext } from "../../context/CategoriesProvider";

export default function TelemetrySettings() {
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
    console.log(payload);
  };

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
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>CATEGORIA:</Text>
                    <CategoryModal options={categorias.categorias} />
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
