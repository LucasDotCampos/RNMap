import React from "react";
import { LogBox, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import { Routes } from "./src/routes";

import { CategoriesProvider } from "./src/context/CategoriesProvider";
import { SectorsProvider } from "./src/context/SectorsProvider";
import { StoppingProvider } from "./src/context/StoppingProvider";
import TelemetrySettings from "./src/screens/TelemetrySettings";

export default function App() {
  LogBox.ignoreAllLogs(true);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    BebasNeue_400Regular,
  });

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SectorsProvider>
      <CategoriesProvider>
        <StoppingProvider>
          <TelemetrySettings />
        </StoppingProvider>
      </CategoriesProvider>
    </SectorsProvider>
  );
}
