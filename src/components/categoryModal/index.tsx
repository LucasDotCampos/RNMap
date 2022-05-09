import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import AsyncStorage from "@react-native-async-storage/async-storage";
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

export const CategoryModal = ({ options }) => {
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
      arr.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const toggleSelection = (item) => {
    let index = selected.findIndex((i) => i?.id === item?.id);
    let arrSelected = [...selected];

    if (index !== -1) arrSelected.splice(index, 1);
    else arrSelected.push(item);

    setSelected(arrSelected);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[
          styles.text,
          {
            backgroundColor:
              selected?.findIndex((i) => i.id === item.id) !== -1
                ? "#4184fe"
                : "#fff",
          },
        ]}
        onPress={() => toggleSelection(item)}
      >
        <Text style={styles.text}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleGetCategory = async () => {
    const category = JSON.parse(await AsyncStorage.getItem("@mapapp:category"));

    if (!category) return;

    setData(category);
    setRealSelected(category);
    setSelected(category);
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleConcluir = async () => {
    await AsyncStorage.setItem("@mapapp:category", JSON.stringify(selected));
    setVisible(false);
    setSearch("");
    setRealSelected(selected);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setVisible(true);
        setData(options);
        setOriginalOptions(options);
      }}
    >
      <View style={styles.mainInput}>
        <Text numberOfLines={1}>
          {realSelected.map((sector) => `'${sector.name}'  `)}
        </Text>
        <Ionicons name="chevron-down" size={20} style={styles.icon} />
      </View>
      <Modal
        onRequestClose={() => {
          setSelected(realSelected);
          setVisible(false);
        }}
        visible={visible}
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
                  onPress={handleConcluir}
                >
                  <Text style={styles.sendButtonText}>Concluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            style={styles.text}
            data={data}
            keyExtractor={(item) => String([item.id])}
            renderItem={({ item }) => renderItem(item)}
          />
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};
