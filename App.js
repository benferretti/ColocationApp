import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import IndexScreen from './screens/IndexScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Provider} from "react-redux";
import Store from "./Store/store";
import MyComponent from './components/my_component';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

function HomeScreen({ navigation }) {
  let persistor = persistStore(Store)
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <MyComponent></MyComponent>
        <Button
          title="Se connecter"
          onPress={() => navigation.navigate("Se connecter")}
        />
        <Button
          title="S'inscrire"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </Provider>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Se connecter" component={LoginScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Mon profil" component={ProfileScreen} />
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
