import { View, Text } from "react-native";
import styles from "../components/estilos";

export default function Config(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Configurações</Text>
        </View>
    );
}