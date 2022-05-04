import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";

const Select = ({ title, options, onChangeSelect }) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(title);
  const [inputText, setInputText] = useState("");

  function renderOption(item) {
    function AfterPress() {
      onChangeSelect(item.id);
      setText(item.name);
      setVisible(false);
      setInputText(item.name);
    }
    return (
      <TouchableOpacity style={styles.options} onPress={AfterPress}>
        <Text style={styles.optionsText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
      <Text style={styles.text}>{inputText}</Text>
      <Ionicons name="chevron-down" size={25} style={styles.actions} />
      <Modal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        animationType={"slide"}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.header2}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Ionicons
                  name="chevron-back"
                  size={25}
                  style={styles.actions}
                />
              </TouchableOpacity>
              <Text style={styles.text}>{text}</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => String([item.id])}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};

export default Select;
