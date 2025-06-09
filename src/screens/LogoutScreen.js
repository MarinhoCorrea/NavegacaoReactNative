import React from "react";
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text, Asy } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get('window').width;

export default function LogoutScreen({ navigation }) {
     const apagarCadastro = async () => {
        await AsyncStorage.removeItem('Nome');
        await AsyncStorage.removeItem('Senha');
        navigation.navigate("Cadastro");
    };
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Logout.png')} style={styles.Image} />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.botao} >Sair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={apagarCadastro}>
                <Text style={styles.botao} >Apagar Cadastro</Text>   
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

    Image: {
        width: 100,
        height: 100,
        marginBottom: 10,

    },
    buttonContainer: {
        height: 40,
        width: windowWidth * 0.5,
        margin: 20,
        borderRadius: 5,
        
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
        marginTop: 10,
        

    },

});