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
import { ICategory, IParada, ISelectedStopping } from "../../interfaces";
import { paradas } from "../../fakeapi";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IProps {
  options: IParada[];
  modalVisible: any;
  setModalVisible: any;
  category: ICategory;
  deselectCategory: any;
  selectCategory: any;
  toggleStoppings: any;
}

export const StoppingModal = ({
  options,
  modalVisible,
  setModalVisible,
  category,
  deselectCategory,
  selectCategory,
  toggleStoppings,
}: IProps) => {
  const { setStopping } = useStoppingContext();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<IParada[]>(options);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ISelectedStopping[]>([]);
  const [realSelected, setRealSelected] = useState([]);
  const searchInput = useRef(null);

  // useEffect(() => {
  //   let arr = [...options];
  //   setData(
  //     arr.filter((i) => i.dsParada.toLowerCase().includes(search.toLowerCase()))
  //   );
  // }, [search]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const selectedCategoryIndex: number = selected.findIndex(
    (i) => i.idCatPar === category.idCatPar
  );

  const selectParadas = async (item: IParada) => {
    let arrSelected = [...selected];
    let index = arrSelected.findIndex((i) => i.idCatPar === category.idCatPar);

    if (index !== -1) {
      arrSelected[index].paradas.push(item);
    } else {
      console.log("não tinha");

      arrSelected.push({
        idCatPar: category.idCatPar,
        paradas: [],
      });

      index = arrSelected.findIndex((i) => i.idCatPar === category.idCatPar);

      arrSelected[index].paradas.push(item);
    }

    if (arrSelected.length === 0) {
      deselectCategory(category);
    } else {
      selectCategory(category);
    }

    setSelected(arrSelected);
    console.log("paradas Selecionadas", arrSelected);

    // // setStopping(arrSelected);
    toggleStoppings(item);

    setData(JSON.parse(await AsyncStorage.getItem("possibleStoppings")));

    console.log("paradas Disponíveis", options);
  };

  const deselectParadas = async (item: IParada) => {
    let arrSelected = [...selected];
    let index = arrSelected.findIndex((i) => i.idCatPar === category.idCatPar);

    arrSelected[index].paradas = arrSelected[index].paradas.filter(
      (i) => i.cdParada !== item.cdParada
    );

    if (arrSelected[index].paradas.length === 0) {
      deselectCategory(category);
    }

    setSelected(arrSelected);
    console.log("paradas Selecionadas", arrSelected);
    toggleStoppings(item);
    setData(JSON.parse(await AsyncStorage.getItem("possibleStoppings")));
  };

  const handleSubmit = () => {
    setVisible(false);
    setSearch("");
    setRealSelected(selected);
  };

  const renderItemSelected = (item: IParada, index) => {
    return (
      <TouchableOpacity
        style={styles.text}
        onPress={() => deselectParadas(item)}
      >
        <Text style={styles.text}>{item.dsParada}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = (item: IParada, index) => {
    return (
      <TouchableOpacity style={styles.text} onPress={() => selectParadas(item)}>
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Opções</Text>
        </View>
        <FlatList
          style={styles.text}
          data={data}
          keyExtractor={(item) => String([item.cdParada])}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Selecionados</Text>
        </View>
        <FlatList
          style={styles.text}
          data={selected[selectedCategoryIndex]?.paradas || []}
          keyExtractor={(item) => String([item.cdParada])}
          renderItem={({ item, index }) => renderItemSelected(item, index)}
        />
      </SafeAreaView>
    </Modal>
  );
};
