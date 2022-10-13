import React from 'react';
import { NativeBaseProvider } from 'native-base';
import theme from './src/themes';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HelloWorld from './screens/Hello';


const Stack = createNativeStackNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Hello' component={HelloWorld} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function () {
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}