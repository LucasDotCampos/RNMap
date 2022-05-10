import React from "react";
import { SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    BebasNeue_400Regular,
  });

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
