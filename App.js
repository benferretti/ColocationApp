import 'react-native-gesture-handler';
import * as React from "react";
import { View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate('Se connecter')}
      />
      <Button
        title="S'inscrire"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Se connecter" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
