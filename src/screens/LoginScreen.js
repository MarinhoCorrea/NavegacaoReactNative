import React from "react";
import { View, Text, Button, StyleSheet, Dimensions,TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const[nome, setNome] = React.useState("");
    const[senha, setSenha] = React.useState("");
function validacao(nome, senha) {
    if (senha.length == 6 && senha.length == 6 && nome.length > 0) {
        navigation.navigate("Home");
    }
//if (/^\d{6}$/.test(senha) && nome.length > 0) {
//    navigation.navigate("Home");
//}
    else {
        alert("Senha deve conter 6 digitos"); 
    }
    
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            keyboardType="number-pad"
            secureTextEntry={true}
            maxLength={6}
            value={senha}
            onChangeText={setSenha}
        />
        <View style={styles.buttonContainer}> 
            <Button
                title="Sing In"
                onPress={() => validacao(nome,senha)}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 26,
        marginBottom:50,
    },
    input: {
        height: 40,
        width:windowWidth * 0.5,
        borderColor: '	#BDBDBD',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
  },
    buttonContainer: {
        backgroundColor: "#2D2D2D",
        width: windowWidth * 0.5,
        margin: 10,
        borderRadius: 5,
    },
});