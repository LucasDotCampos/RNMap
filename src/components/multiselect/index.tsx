import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ScreenOrientation from "expo-screen-orientation";

import {
    TouchableOpacity,
    Text,
    View,
    Modal,
    SafeAreaView,
    TextInput,
    FlatList,
    Alert,
} from "react-native";

import { styles } from "./styles";

export const SelectMultiple = ({ options, onChange, max }) => {
    const [visible, setVisible] = useState(false);
    const [originalOptions, setOriginalOptions] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setOriginalOptions(options);
        setData(options);
    }, []);

    useEffect(() => {
        let arr = [...originalOptions];
        setData(
            arr.filter((i) =>
                i.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    function toggleSelection(item) {
        let index = selected.findIndex((i) => i?.id === item?.id);
        let arrSelected = [...selected];

        if (index !== -1) {
            arrSelected.splice(index, 1);
        } else {
            if (arrSelected.length < max) {
                arrSelected.push(item);
            }
        }
        setSelected(arrSelected);
    }

    function renderItem(item) {
        return (
            <TouchableOpacity
                style={[
                    styles.input,
                    {
                        backgroundColor:
                            selected?.findIndex((i) => i.id === item.id) !== -1
                                ? "#624ae9"
                                : "#ffffff",
                    },
                ]}
                onPress={() => toggleSelection(item)}
            >
                <Text style={styles.title}>{item?.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                setVisible(true);
            }}
        >
            <View style={styles.largeInput}>
                <Text onPress={() => setData(options)}></Text>
                <Text numberOfLines={1}>
                    {selected.map((sector) => `'${sector.name}'  `)}
                </Text>
                <Ionicons name="chevron-down" size={20} style={styles.icon} />
            </View>
            <Modal onRequestClose={() => setVisible(false)} visible={visible}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <View style={styles.header2}>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={styles.actions}>{"<"}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    onChange(selected);
                                    setVisible(false);
                                    setSearch("");
                                }}
                            >
                                <Text style={styles.actions}>Concluir</Text>
                            </TouchableOpacity>
                        </View>
                        {originalOptions.length > 5 ? (
                            <TextInput
                                placeholder={"Pesquisar"}
                                style={styles.input}
                                value={search}
                                onChangeText={setSearch}
                            />
                        ) : null}
                    </View>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => String([item.id])}
                        renderItem={({ item }) => renderItem(item)}
                    />
                </SafeAreaView>
            </Modal>
        </TouchableOpacity>
    );
};
