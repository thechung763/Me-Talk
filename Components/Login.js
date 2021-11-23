import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, document, Image, ToastAndroid, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import newfeed from './Newfeed';
import Notify from './Notify';
import profile from './Notify';



const login = ({ navigation }) => {

    const [state, setState] = useState({
        username: "",
        password: ""
    })


    const login = () => {
        if (state.username == '0333690316' && state.password == '123') {
            navigation.navigate('Intent_newfeed');
        } else {
            Alert.alert('tai khoan mat khau khong chinh xac')
        }
    };

    const sigin = () => {
        Alert.alert('Sigin')
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

        <View>

            <Text style={{ marginTop: 100, marginLeft: 130, fontSize: 30 }}>Đăng Nhập </Text>

            <TextInput placeholder='Tài khoản' style={{
                width: 250, height: 30, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 60, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }}
                onChangeText={value => pass_login_username(value)}
            ></TextInput>

            <TextInput placeholder='Mật khẩu' style={{
                width: 250, height: 30, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 60, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }}
                onChangeText={value => pass_login_password(value)}
            ></TextInput>
            <Button title='Đăng nhập' onPress={() => login()}></Button>
            <Button title='Đăng kí' onPress={() => sigin()}></Button>

        </View>
    );
}
export default login;
