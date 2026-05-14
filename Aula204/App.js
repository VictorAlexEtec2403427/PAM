import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import HomeScreen from "./components/Home";
import Cadastro from "./components/Cadastro";

const Drawer = createDrawerNavigator();

export default function App() {
  const [alunos, setAlunos] = useState([]);

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Lista" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}