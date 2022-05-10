import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelemetrySettings from "../screens/TelemetrySettings";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={TelemetrySettings} />
    </Navigator>
  );
}
