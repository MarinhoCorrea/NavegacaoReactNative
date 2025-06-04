import React from "react";
import { View, StyleSheet,Dimensions,Image } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/IconDetails.png')} style={styles.Image} />
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
    Image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});