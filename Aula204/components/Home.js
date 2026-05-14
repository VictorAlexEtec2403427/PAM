import { View, Text } from "react-native";
import styles from "./estilos";

export default function HomeScreen(){
    return(
        <View style={styles.container1}>
            <Text style={styles.titulo}>Sistema de Cadastro de alunos</Text>

            <Text style={styles.texto}>
                O objeto deste aplicativo é desenvolver um app capaz de receber dados e armazenar em um vetor, e depois exibi-lo em uma FlatList
            </Text>

            <Text>
                Desenvolvido por Victor Alex M. Gouveia
            </Text>
        </View>
    )
}