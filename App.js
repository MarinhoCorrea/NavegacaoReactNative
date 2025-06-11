import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeDrawer';
import HomeDrawer from './src/screens/HomeDrawer';


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown: false, // Esconde o cabeçalho padrão
          }}>
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Login" component={LoginScreen}  />
          <Stack.Screen name="HomeDrawer" component={HomeDrawer}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}