import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2:{
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo:{
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#930000",
    },
    texto:{
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
    },
    paragrafo: {
        fontSize: 18,
        textAlign: 'left'
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 18
    },

    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd"
    },

    cardTexto: {
        fontSize: 18,
        marginBottom: 5
    },

    botao: {
        backgroundColor: "#960000",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
    },

    botaoTexto: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles;