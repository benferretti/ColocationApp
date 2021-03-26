import * as React from "react";
import { View, Button, Text, TextInput, StyleSheet} from "react-native";
import {useDispatch, useSelector, useCallback} from 'react-redux';
import Store from "../Store/store";

function ProfileScreen({ route, navigation }) {
  const { email } = route.params;
  const [newemail, onChangeEmail] = React.useState(email);
  

  return (
    <View style={styles.container}>
      <Text>Email actuel : {email}</Text>
      <TextInput
        style={styles.email}
        placeholder={email}
        onChangeText={(text) => onChangeEmail(text)}
        value={newemail}
      />
      <Button
        title="Modifier"
        onPress={() => {
          navigation.navigate("Index", {
            email: newemail,
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
  
  email: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    padding: 1,
    textAlign: "center",
  },
});

export default ProfileScreen;