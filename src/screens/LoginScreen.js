import React from "react";
import { View, Text, Button, StyleSheet, Dimensions,TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const[nome, setNome] = React.useState("");
    const[senha, setSenha] = React.useState("");
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
                onPress={() => navigation.navigate("Home")}
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
        backgroundColor: "#f0f8ff",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width:windowWidth * 0.5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
  },
    buttonContainer: {
        backgroundColor: "#add8e6",
        width: windowWidth * 0.5,
        margin: 10,
        borderRadius: 5,
    },
});