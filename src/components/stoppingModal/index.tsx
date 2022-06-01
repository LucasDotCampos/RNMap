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
import { IParada, ISelectedStopping } from "../../interfaces";
import { paradas } from "../../fakeapi";

export const StoppingModal = ({
  options,
  modalVisible,
  setModalVisible,
  category,
  deselectCategory,
  selectCategory,
  toggleStoppings,
}) => {
  const { setStopping } = useStoppingContext();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(options);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ISelectedStopping[]>([]);
  const [realSelected, setRealSelected] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    let arr = [...options];
    setData(
      arr.filter((i) => i.dsParada.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const toggleSelection = (item: IParada) => {
    let index = selected.findIndex((i) => i.idCatPar === category.idCatPar);
    let arrSelected = [...selected];

    if (index !== -1) {
      arrSelected[index].paradas.push(item);
    } else {
      console.log("não tinha");

      arrSelected.push({
        idCatPar: category.idCatPar,
        paradas: [item],
      });
    }

    if (arrSelected.length === 0) {
      deselectCategory(category);
    } else {
      selectCategory(category);
    }

    setSelected(arrSelected);
    console.log(arrSelected);

    // // setStopping(arrSelected);
    toggleStoppings(item);
    setData([selected, ...options]);
    console.log(data);
  };

  const handleSubmit = () => {
    setVisible(false);
    setSearch("");
    setRealSelected(selected);
  };

  const renderItem = (item: IParada, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.text,
          {
            backgroundColor:
              selected?.findIndex(
                (i) => i.paradas[index]?.cdParada === item?.cdParada
              ) !== -1
                ? "#4184fe"
                : "#fff",
          },
        ]}
        onPress={() => toggleSelection(item)}
      >
        {category.idCatPar === item}
        <Text style={styles.text}>{item.dsParada}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      onRequestClose={() => {
        setSelected(realSelected);
        // setVisible(false);
      }}
      visible={modalVisible}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.header2}>
            <View style={styles.boxSize}>
              <TouchableOpacity
                onPress={() => {
                  // setSelected(realSelected);
                  // setVisible(false);
                  setModalVisible(false);
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
          renderItem={({ item, index }) => renderItem(item, index)}
        />
      </SafeAreaView>
    </Modal>
  );
};
