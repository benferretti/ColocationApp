import * as React from "react";
import { View, Button, Text, TextInput, StyleSheet} from "react-native";

function IndexScreen({ route, navigation }) {
  const { email } = route.params;
  return (
    <View style={styles.container}>
      <Text>Email : {email}</Text>
      <Button
        title="Modifier mon profil"
        onPress={() => {
          navigation.navigate("Mon profil", {
            email: email,
          });
        }}
      />
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