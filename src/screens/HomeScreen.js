import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity , Image} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/IconHome.png')} style={styles.Image} />
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
        fontSize: 24,
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
    Image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10,
    },
    buttonContainer: {
        height: 30,
        width: windowWidth * 0.5,
        margin: 10,
        paddingTop: 50,
        paddingBottom: 30,
        borderRadius: 5,
    },
});