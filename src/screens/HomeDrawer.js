import { StyleSheet, Dimensions } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from "./DetailsScreen";
import ProfileScreen from './ProfileScreen';
import HomeScreen from "./HomeScreen";
import LogoutScreen from "./LogoutScreen";
import CustomDrawer from "../components/CustomDrawer";
import { Header } from "@react-navigation/stack";
const windowWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#BDBDBD',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#000',
                drawerLabelStyle: {
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }} />
            <Drawer.Screen name="About"
                component={DetailsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="list" size={22} color={color} />
                    ),
                }} />
            <Drawer.Screen name="Logout"
                component={LogoutScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="log-out" size={22} color={color} />
                    ),
                }} />

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