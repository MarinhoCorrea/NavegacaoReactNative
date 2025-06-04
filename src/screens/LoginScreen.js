import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "./HomeDrawer";
const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");
    async function validacao() {
        const storedNome = await AsyncStorage.getItem('Nome');
        const storedSenha = await AsyncStorage.getItem('Senha');

        if (nome === storedNome && senha === storedSenha) {
            navigation.navigate("HomeDrawer");
        } else if (nome.length === 0 && senha.length === 0) {
            alert("Nome e senha não podem ser vazios");
        } else if (nome.length === 0) {
            alert("Nome não pode ser vazio");
        } else if (senha.length === 0) {
            alert("Senha não pode ser vazia");
        } else {
            alert("Nome ou senha incorretos");
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo de Volta!</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha:Digite seis números"
                keyboardType="number-pad"
                secureTextEntry={true}
                maxLength={6}
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.IrCadastro} >Não tem cadastro? Clique aqui!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={validacao}>
                <Text style={styles.botao} >Login</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BDBDBD",
    },
    title: {
        fontSize: 26,
        marginBottom: 50,
    },
    input: {
        height: 40,
        width: windowWidth * 0.5,
        borderColor: '	#BDBDBD',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    IrCadastro: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
    },
    botao: {
        height: 50,
        width: windowWidth * 0.5,
        borderColor: '	#BDBDBD',
        backgroundColor: '#BDBDBD',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 5,
        textAlign: "center",
        paddingTop: 10,
        fontSize: 20,
    },
    buttonContainer: {
        height: 40,
        width: windowWidth * 0.5,
        margin: 5,
        borderRadius: 5,
    },
});