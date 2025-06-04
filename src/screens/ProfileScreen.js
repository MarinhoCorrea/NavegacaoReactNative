import React from "react";
import { View, StyleSheet, Dimensions,Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen() {
    return (
        <View style={styles.container}>

            <Image source={require('../../assets/User.png')} style={styles.Image} />

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
        borderRadius: 100,
        marginBottom: 10,
    },
    
});