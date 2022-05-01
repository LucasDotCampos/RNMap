import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

function SearchComponent() {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder="User Nickname"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

export default SearchComponent;
