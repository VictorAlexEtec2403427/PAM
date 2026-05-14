import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './estilos';

const [nome, setNome] = useState("");
const [curso, setCurso] = useState("");
const [idade, setIdade] = useState("");

function cadastrarAluno(){
    return(
        <View style={styles.container2}>

            <Text style={styles.titulo}>Cadastro de Alunos</Text>
            <Text style={styles.paragrafo}>Digite o nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />

        </View>
    )
}

export default function Cadastro( {alunos, setAlunos} ){
    return(
        <View>
            <TextInput placeholder='Digite seu nome'/>
        </View>
    )
}
