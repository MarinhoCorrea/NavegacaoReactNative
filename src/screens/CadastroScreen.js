import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get('window').width;

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");
    function validacao() {
        if (senha.length == 6 && nome.length > 0) {
            AsyncStorage.setItem('Nome', nome);
            AsyncStorage.setItem('Senha',senha);
            navigation.navigate("Login");
        }else if (senha.length == 0 && nome.length > 0) {
            alert("Nome não pode ser vazio");
        }
        if (senha.length != 6 && nome.length > 0) {
            alert("Senha deve ter 6 números");
        }
        if (senha.length == 0 && nome.length == 0) {
            alert("Nome e senha não podem ser vazios");
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá,Cadastre-se!</Text>
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
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.IrLogin} >Já tem login? Clique aqui!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={validacao}>
                <Text style={styles.botao} >Cadastrar</Text>
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
    IrLogin: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
    },
    botao: {
        height: 50,
        width:windowWidth * 0.5,
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