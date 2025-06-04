import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from './ProfileScreen';
import HomeScreen from "./HomeScreen";
const windowWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Perfil" component={ProfileScreen} />
                <Drawer.Screen name="Sobre" component={DetailsScreen} />
            </Drawer.Navigator>
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