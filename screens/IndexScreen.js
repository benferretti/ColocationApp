import * as React from "react";
import { View, Button, Text, TextInput, StyleSheet} from "react-native";

function IndexScreen({ navigation, props }) {
  return (
    <View style={styles.container}>
      <Text>Index Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IndexScreen;