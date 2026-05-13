import { View, Text, Button } from "react-native";
import styles from "../components/estilos";

export default function Home(){
    return(
        <View style={styles.container}>

            <Text>Tela Inicial</Text>
            <Button title="Abrir menu"/>
            
        </View>
    );
}