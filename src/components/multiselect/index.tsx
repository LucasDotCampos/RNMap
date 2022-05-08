import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
    TouchableOpacity,
    Text,
    View,
    Modal,
    SafeAreaView,
    TextInput,
    FlatList,
    Alert,
    PixelRatio,
} from "react-native";

import { styles } from "./styles";

export const SelectMultiple = ({ options, onChange }) => {
    const [visible, setVisible] = useState(false);
    const [originalOptions, setOriginalOptions] = useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);

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
            arrSelected.push(item);
        }
        setSelected(arrSelected);
    }

    function renderItem(item) {
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
                <Text style={styles.title}>{item?.name}</Text>
            </TouchableOpacity>
        );
    }

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

                            <TextInput
                                placeholderTextColor={"#4184fe"}
                                placeholder={"Pesquisar"}
                                style={styles.input}
                                value={search}
                                onChangeText={setSearch}
                            />

                            <TouchableOpacity
                                style={styles.sendButton}
                                onPress={() => {
                                    onChange(selected);
                                    setVisible(false);
                                    setSearch("");
                                }}
                            >
                                <Text style={styles.sendButtonText}>
                                    Concluir
                                </Text>
                            </TouchableOpacity>
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
