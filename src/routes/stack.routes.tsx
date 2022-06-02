import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompanyMonitoring from "../screens/CompanyMonitoring";
import TelemetrySettings from "../screens/TelemetrySettings";
import { Home } from "../screens/Home";
import { CategoryModal } from "../screens/Category";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Category" component={CategoryModal} />
      <Screen name="Telemetry" component={TelemetrySettings} />
      <Screen name="Home" component={Home} />
      <Screen name="Monitoring" component={CompanyMonitoring} />
    </Navigator>
  );
}
