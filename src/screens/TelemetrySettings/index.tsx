import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { indexList } from '../../fakeapi';
import { HeaderComponent } from './../../components/header';
import { styles } from './styles';
import { SelectMultiple } from './../../components/multiselect';


export default function TelemetrySettings() {
  const [sector, setSector] = useState([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderComponent />

        <View style={styles.sector}>
          <Text style={styles.text}>Selecione o Setor:</Text>

          <SelectMultiple
            options={indexList}
            onChange={(selecionados) => setSector(selecionados)}
          />
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.lineBlocks}>
            <View>
              <Text style={styles.text}>
                CONFIGURAÇÃO DO TEMPO DE PARADA
              </Text>
              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      Branco:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      AMARELO:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      VERMELHO:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                    <Text style={styles.segText}>SEG</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.text}>
                CONFIGURAÇÃO TIPO DE PARADA
              </Text>
              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      CATEGORIA:
                    </Text>
                    <TouchableOpacity
                      style={styles.inputBlock}
                    >
                      <Ionicons
                        name='chevron-down'
                        size={20}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      PARADA:
                    </Text>
                    <TouchableOpacity
                      style={styles.inputBlock}
                    >
                      <Ionicons
                        name='chevron-down'
                        size={20}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.text}>
                CONFIGURAÇÕES DE PEÇAS REFUGADAS
              </Text>

              <View style={styles.block}>
                <View style={styles.flexEndBlock}>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      BRANCO:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      AMARELO:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                  </View>
                  <View style={styles.inputLine}>
                    <Text style={styles.inputText}>
                      VERMELHO:
                    </Text>
                    <TextInput style={styles.inputBlock} />
                  </View>
                </View>

                <View style={styles.productionInputLine}>
                  <Text style={styles.inputText}>
                    PRODUÇÃO:
                  </Text>
                  <TextInput style={styles.production} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.sendButtonText}>CONCLUIR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
