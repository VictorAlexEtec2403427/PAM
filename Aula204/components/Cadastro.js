import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './estilos';

const [nome, setNome] = useState("");
const [curso, setCurso] = useState("");
const [idade, setIdade] = useState("");
const [mensagem, setMensagem] = useState("Testando... ")

export default function Cadastro( {alunos, setAlunos} ){

    function cadastrarAluno(){
        const novoAluno = {
            nome: nome,
            curso: curso,
            idade: idade,
        };

        setAlunos([...alunos, novoAluno]);
    }

    return(
        <View style={styles.container2}>

            <Text style={styles.titulo}>Cadastro de Alunos</Text>

            <Text style={styles.paragrafo}>Digite o nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.paragrafo}>Digite o curso:</Text>
            <TextInput
                style={styles.input}
                value={curso}
                onChangeText={setCurso}
            />

            <Text style={styles.paragrafo}>Digite o idade:</Text>
            <TextInput
                style={styles.input}
                value={idade}
                onChangeText={setIdade}
            />

            <TouchableOpacity style={styles.botao} onPress={cadastrarAluno}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={styles.mensagem}>
                {mensagem}
            </Text>
        </View>
    )
}