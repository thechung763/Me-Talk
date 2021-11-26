import React from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{ /* man hinh */ }
import login from './Components/Login';
import newfeed from './Components/Newfeed';
import menu from './Components/Menu';
import notify from './Components/Notify';
import profile from './Components/Profile';
import sigin from './Components/Sigin';


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
          component={menu}
          options={{ title: 'Menu' }}
        />

        <Stack.Screen
          name="Intent_profile"
          component={profile}
          options={{ title: 'Profile' }}
        />

        <Stack.Screen
          name="Intent_sigin"
          component={sigin}
          options={{ title: 'Sigin' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;