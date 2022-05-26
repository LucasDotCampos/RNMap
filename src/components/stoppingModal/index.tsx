import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  TouchableOpacity,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { useStoppingContext } from "../../context/StoppingProvider";

export const StoppingModal = ({ options, modalVisible }) => {
  const { setStopping } = useStoppingContext();
  const [visible, setVisible] = useState(false);
  const [originalOptions, setOriginalOptions] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [realSelected, setRealSelected] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    let arr = [...originalOptions];
    setData(
      arr.filter((i) => i.dsParada.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  useEffect(() => {
    setVisible(true);
    setData(options);
    setOriginalOptions(options);
  }, []);

  const toggleSelection = (item) => {
    let index = selected.findIndex((i) => i?.cdParada === item?.cdParada);
    let arrSelected = [...selected];

    if (index !== -1) arrSelected.splice(index, 1);
    else arrSelected.push(item);

    setSelected(arrSelected);
    setStopping(arrSelected);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[
          styles.text,
          {
            backgroundColor:
              selected?.findIndex((i) => i.cdParada === item.cdParada) !== -1
                ? "#4184fe"
                : "#fff",
          },
        ]}
        onPress={() => toggleSelection(item)}
      >
        <Text style={styles.text}>{item?.dsParada}</Text>
      </TouchableOpacity>
    );
  };

  const handleSubmit = () => {
    setVisible(false);
    setSearch("");
    setRealSelected(selected);
  };

  return (
    <Modal
      onRequestClose={() => {
        setSelected(realSelected);
        setVisible(false);
      }}
      visible={modalVisible}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.header2}>
            <View style={styles.boxSize}>
              <TouchableOpacity
                onPress={() => {
                  setSelected(realSelected);
                  setVisible(false);
                }}
              >
                <Text style={styles.actions}>{"<"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.searchView}
              onPress={() => searchInput.current.focus()}
            >
              <Ionicons
                style={styles.searchIcon}
                name="search"
                size={20}
                color={"#4184fe"}
              />
              <TextInput
                placeholderTextColor={"#4184fe"}
                placeholder={"Pesquisar"}
                style={styles.input}
                value={search}
                onChangeText={setSearch}
                ref={searchInput}
              />
            </TouchableOpacity>

            <View style={styles.sendBox}>
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSubmit}
              >
                <Text style={styles.sendButtonText}>Concluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          style={styles.text}
          data={data}
          keyExtractor={(item) => String([item.cdParada])}
          renderItem={({ item }) => renderItem(item)}
        />
      </SafeAreaView>
    </Modal>
  );
};
