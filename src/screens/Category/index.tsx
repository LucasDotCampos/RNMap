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
import { useCategoriesContext } from "../../context/CategoriesProvider";
import { ICategory, IParada } from "../../interfaces";
import { StoppingModal } from "../../components/stoppingModal";
import { categorias, paradas } from "../../fakeapi";
import { fonts } from "../../globalstyles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CategoryModal = ({ navigation }) => {
  const { setCategories } = useCategoriesContext();
  const [visible, setVisible] = useState(false);
  const [originalOptions, setOriginalOptions] = useState(categorias.categorias);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ICategory[]>([]);
  const [categoryRealSelected, setCategoryRealSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryClicked, setCategoryClicked] = useState<ICategory>();
  const [possibleStoppings, setPossibleStoppings] = useState<IParada[]>(
    paradas.paradas
  );
  const searchInput = useRef(null);

  const toggleStoppings = async (item: IParada) => {
    let arrSelected = [...possibleStoppings];

    let index = possibleStoppings.findIndex(
      (itemM) => item.cdParada === itemM.cdParada
    );

    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      arrSelected.push(item);
    }

    await AsyncStorage.setItem(
      "possibleStoppings",
      JSON.stringify(arrSelected)
    );

    setPossibleStoppings(arrSelected);
  };

  const goBack = () => {
    navigation.navigate("Telemetry");
  };

  const openStopping = (item) => {
    setModalVisible(true);
    setCategoryClicked(item);
  };

  const deselectCategory = (item: ICategory) => {
    let index = selected.findIndex((i) => i?.idCatPar === item?.idCatPar);
    let arrSelected = [...selected];
    arrSelected.splice(index, 1);
    setSelected(arrSelected);
    setCategories(arrSelected);
    setCategoryRealSelected(selected);
  };

  const selectCategory = (item: ICategory) => {
    let index = selected.findIndex((i) => i?.idCatPar === item?.idCatPar);
    let arrSelected = [...selected];

    if (index === -1) {
      arrSelected.push(item);
    }

    setSelected(arrSelected);
    setCategories(arrSelected);
    setCategoryRealSelected(selected);
  };

  useEffect(() => {
    let arr = [...originalOptions];
    setData(
      arr.filter((i) => i.dsCatPar.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[
          styles.flatList,
          {
            backgroundColor:
              selected?.findIndex((i) => i.idCatPar === item.idCatPar) !== -1
                ? "#4184fe"
                : "#fff",
          },
        ]}
        onPress={() => openStopping(item)}
      >
        <Text
          style={{
            color:
              selected?.findIndex((i) => i.idCatPar === item.idCatPar) !== -1
                ? "#ffffff"
                : "#000000",
            fontSize: 21,
            fontWeight: "500",
            fontFamily: fonts.BebasNeue400,
            padding: 10,
            margin: 2,
          }}
        >
          {item?.dsCatPar}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StoppingModal
        category={categoryClicked}
        options={possibleStoppings}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        deselectCategory={deselectCategory}
        selectCategory={selectCategory}
        toggleStoppings={toggleStoppings}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setSelected(categoryRealSelected);
                goBack();
              }}
            >
              <Text style={styles.backButtonText}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Concluir</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => String([item.idCatPar])}
            renderItem={({ item }) => renderItem(item)}
          />
        </View>
      </View>
    </>
  );
};
