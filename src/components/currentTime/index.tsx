import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function CurrentTime() {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setDate(getCurrentDate());
      setTime(getCurrentTime());
    }, 1000);
  });

  const getCurrentTime = () => {
    let today = new Date();
    const formatedTime = today.toLocaleTimeString("pt-br", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return formatedTime;
  };

  const getCurrentDate = () => {
    let today = new Date();
    return today.toLocaleDateString("pt-br", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {date} {time}
      </Text>
    </View>
  );
}
