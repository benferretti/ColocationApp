import * as React from "react";
import { View, Button, Text, TextInput, StyleSheet} from "react-native";

function LoginScreen({ navigation, props }) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Adresse mail :</Text>
      <TextInput style={styles.email}
        placeholder="Entrez ici votre adresse mail"
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
      />
      <Text>Mot de passe :</Text>
      <TextInput style={styles.email}
        placeholder="Entrez ici votre mot de passe"
        onChangeText={(text) => onChangePassword(text)}
        value={password}
      />
      <Button
        title="Se connecter"
        onPress={() => 
          navigation.navigate('Index')
        }
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

  email: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    padding: 1,
    textAlign: 'center'
  },
});

export default LoginScreen;