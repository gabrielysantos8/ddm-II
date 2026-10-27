
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Musica from './screens/musica/Musica';
import Biblioteca from './screens/biblioteca/Biblioteca';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

          <Stack.Screen
          name="Musica"
          component={Musica}
        />

        <Stack.Screen
          name="Biblioteca"
          component={Biblioteca}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
