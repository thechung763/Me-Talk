import { ALIAS_KEYS, logicalExpression, tSBigIntKeyword } from '@babel/types';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import login from './Login';

var Firebase = require('firebase');

const intents_sigin = ({navigation}) => {

    var root = new Firebase ("https://me-talk-firebase-default-rtdb.firebaseio.com/");

    const [state, setState] = useState({
        username: "",
        phone: "",
        passwork: "",
        confirm_passwork: "",
    })

    const get_username = (value) => {
        console.log(value)
        setState({
            ...state,
            username: value,
        })

    }

    const get_phone = (value) => {
        console.log(value)
        setState({
            ...state,
            phone: value,
        })

    }

    const get_passwork = (value) => {
        console.log(value)
        setState({
            ...state,
            passwork: value,
        })

    }

    const get_confirm_passwork = (value) => {
        console.log(value)
        setState({
            ...state,
            confirm_passwork: value,
        })

    }

    const click_back = () => {
        navigation.navigate('Intent_login');
    }

    const click_sigin = () => {
        if(state.username.length == 0 || state.phone.length == 0 || state.passwork.length == 0 
            || state.confirm_passwork.length == 0) {

            Alert.alert("Vui lòng nhập đầy đủ thông tin để đăng kí");

        }else {
            if(state.passwork == state.confirm_passwork) {
                this.itemsRef = root.child("User").child(state.phone);
                this.itemsRef.set ({
                    UserName:state.username,
                    Phone:state.phone,
                    Passwork:state.passwork,
                }); 

            }else{
                Alert.alert("Mật khẩu xác nhận không khớp");
            }        
        }
    }

    return (

        <View style={{
            alignItems: 'center', backgroundColor: 'white',
            height: '100%'
        }} >
            <Text style={{ fontSize: 30, marginTop: 100 }} >
                Đăng kí
            </Text>

            <TextInput placeholder='Tên đăng nhập' style={{
                width: '60%', backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10, paddingBottom: 5, paddingTop: 5
            }}
            onChangeText={value => get_username(value)} />

            <TextInput placeholder='Số điện thoại' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} 
            onChangeText={value => get_phone(value)}/>

            <TextInput secureTextEntry={true} placeholder='Mật khẩu' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} 
            onChangeText={value => get_passwork(value)}/>

            <TextInput secureTextEntry={true} placeholder='Nhập lại mật khẩu' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} 
            onChangeText={value => get_confirm_passwork(value)}/>

            <View style = {{marginTop:10}}>
            <Button title = "Đăng kí" onPress = {() => click_sigin()} />
            </View>

            <View style = {{marginTop:10}}>
            <Button title = "Trở về" onPress = {() => click_back()} />
            </View>

        </View>

    )

}
export default intents_sigin;
