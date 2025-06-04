import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeDrawer';


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cadastro">
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="HomeDrawer" component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}