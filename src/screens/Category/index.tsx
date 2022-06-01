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
import { ICategory } from "../../interfaces";
import { StoppingModal } from "../../components/stoppingModal";
import { categorias, paradas } from "../../fakeapi";
import { fonts } from "../../globalstyles/fonts";

export const CategoryModal = ({ navigation }) => {
  const options = categorias.categorias;
  const { setCategories } = useCategoriesContext();
  const [visible, setVisible] = useState(false);
  const [originalOptions, setOriginalOptions] = useState(options);
  const [data, setData] = useState(options);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [realSelected, setRealSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const searchInput = useRef(null);

  const goBack = () => {
    navigation.navigate("Telemetry");
  };

  const toggleSelection = (item) => {
    let index = selected.findIndex((i) => i?.idCatPar === item?.idCatPar);
    let arrSelected = [...selected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      arrSelected.push(item);
      setModalVisible(true);
      setVisible(false);
    }

    setSelected(arrSelected);
    setCategories(arrSelected);
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
        onPress={() => toggleSelection(item)}
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
        options={paradas.paradas}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setSelected(realSelected);
                goBack();
              }}
            >
              <Text style={styles.backButtonText}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <View>
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
                underlineColorAndroid={"transparent"}
              />
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
