import { View, Text } from "react-native";
import styles from "../components/estilos";

export default function Perfil(){
    return(
        <View  style={styles.container}>
            <Text style={styles.titulo}>Tela de Perfil</Text>
        </View>
    );
}