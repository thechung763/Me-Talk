import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './Components/Login';
import newfeed from './Components/Newfeed';
import Menu from './Components/menu';
import notify from './Components/Notify';
import profile from './Components/Profile';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intent_login"
          component={login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Intent_newfeed"
          component={newfeed}
          options={{ title: 'New Feed' }}
        />

        <Stack.Screen
          name="Intent_menu"
          component={Menu}
          options={{ title: 'Menu' }}
        />

        <Stack.Screen
          name="Intent_profile"
          component={profile}
          options={{ title: 'Profile' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;