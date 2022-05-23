import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompanyMonitoring from "../screens/CompanyMonitoring";
import TelemetrySettings from "../screens/TelemetrySettings";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Monitoring" component={CompanyMonitoring} />
      <Screen name="Telemetry" component={TelemetrySettings} />
    </Navigator>
  );
}
