// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Products } from './src/Screens/products';
import { ProductCount } from './src/Screens/ProductCount';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductCount" component={ProductCount} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;