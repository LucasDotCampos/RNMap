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
import { useSectorsContext } from "../../context/SectorsProvider";
import { ISector } from "../../interfaces";

export const SelectMultiple = ({ options }) => {
  const { setSectors } = useSectorsContext();
  const [visible, setVisible] = useState(false);
  const [originalOptions, setOriginalOptions] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ISector[]>([]);
  const [realSelected, setRealSelected] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    let arr = [...originalOptions];
    setData(
      arr.filter((i) => i.dsSetor.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const toggleSelection = (item) => {
    let index = selected.findIndex((i) => i.cdSetor === item.cdSetor);
    let arrSelected = [...selected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else arrSelected.push(item);

    setSelected(arrSelected);
    setSectors(arrSelected);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[
          styles.text,
          {
            backgroundColor:
              selected?.findIndex((i) => i.cdSetor === item.cdSetor) !== -1
                ? "#4184fe"
                : "#fff",
          },
        ]}
        onPress={() => toggleSelection(item)}
      >
        <Text style={styles.text}>{item?.dsSetor}</Text>
      </TouchableOpacity>
    );
  };

  const handleSubmit = () => {
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
      <View style={styles.largeInput}>
        <Text numberOfLines={1}>
          {realSelected.map((sector) => `'${sector.dsSetor}'  `)}
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
            keyExtractor={(item) => String([item.cdSetor])}
            renderItem={({ item }) => renderItem(item)}
          />
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
};
