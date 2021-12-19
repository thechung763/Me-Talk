import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, document, Image, ToastAndroid, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ALIAS_KEYS } from '@babel/types';
import { firebase } from '@react-native-firebase/firestore';

var Firebase = require('firebase');

const login = ({ navigation }) => {

    var root = new Firebase("https://me-talk-firebase-default-rtdb.firebaseio.com/");

    const [state, setState] = useState({
        username: "",
        password: ""
    })


    const login = () => {
        const sub = root.child("User").child(state.username);
        sub.once("value").then(snapshot => {
            const ListTK = snapshot.val();

            if (state.username == ListTK.Phone && state.password == ListTK.Passwork) {
                navigation.navigate('Intent_Newfeed');
            } else {
                Alert.alert("Tài khoản hoặc mật khẩu không chính xác.");
            }
        })
    };

    const sigin = () => {
        navigation.navigate('Intent_Sigin');

    };

    const pass_login_username = (value) => {
        console.log(value)
        setState({
            ...state,
            username: value,
        })

    }

    const pass_login_password = (value) => {
        setState({
            ...state,
            password: value
        })
    }

    return (

        <View style={{ alignItems: 'center' }}>

            <Text style={{ marginTop: 100, fontSize: 30 }}>Đăng Nhập </Text>

            <TextInput placeholder='Tài khoản' style={{
                width: '60%', backgroundColor: "#f9f4f4",
                marginTop: 10, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10, paddingBottom: 5, paddingTop: 5
            }}
                onChangeText={value => pass_login_username(value)}
            ></TextInput>

            <TextInput secureTextEntry={true} placeholder='Mật khẩu' style={{
                width: "60%", backgroundColor: "#f9f4f4",
                marginTop: 10, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10, paddingTop: 5, paddingBottom: 5
            }}
                onChangeText={value => pass_login_password(value)}
            ></TextInput>

            <View style={{ marginTop: 10 }} >
                <Button title='Đăng nhập' onPress={() => login()}></Button>
            </View>

            <View style={{ marginTop: 10 }}>
                <Button title='Đăng kí' onPress={() => sigin()}></Button>
            </View>

        </View>
    );
}
export default login;
