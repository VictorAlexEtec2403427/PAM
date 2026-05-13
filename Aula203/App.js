import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "react-navigation/drawer";
import { View, Text } from "react-native";
import styles from "../components/estilos";

function HomeScreen(){
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

function SettingScreen(){
    return (
        <View style={styles.container}>
            <Text>Configurações</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}