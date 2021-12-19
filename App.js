import React from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{ /* man hinh */ }
import login from './Components/Login';
import newfeed from './Components/Newfeed';
import menu from './Components/Menu';
import profile from './Components/Profile';
import sigin from './Components/Sigin';
import editprofile from './Components/EditProfile';
import { run } from 'jest-cli';
import { Intent_Login, Intent_Menu, Intent_Newfeed, Intent_Profile, Intent_Sigin } from './Components/NameScreen';


const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Intent_Login"
          component={login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Intent_Newfeed"
          component={newfeed}
          options={{ title: 'New Feed' }}
        />

        <Stack.Screen
          name="Intent_Menu"
          component={menu}
          options={{ title: 'Menu' }}
        />

        <Stack.Screen
          name="Intent_Profile"
          component={profile}
          options={{ title: 'Profile' }}
        />

        <Stack.Screen
          name="Intent_Sigin"
          component={sigin}
          options={{ title: 'Sigin' }}
        />

        <Stack.Screen
          name="Intent_Edit_profile"
          component={editprofile}
          options={{ title: 'Chỉnh sửa trang cá nhân' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;