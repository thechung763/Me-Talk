import { logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import login from './Login';


const intents_sigin = () => {

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
            }} />

            <TextInput placeholder='Số điện thoại' style={{
                width: "60%", backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10, paddingTop: 5, paddingBottom: 5
            }} />

            <TextInput placeholder='Số điện thoại' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} />

            <TextInput placeholder='Mật khẩu' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} />

            <TextInput placeholder='Nhập lại mật khẩu' style={{
                width: '60%', paddingBottom: 5, paddingTop: 5, backgroundColor: "#f9f4f4",
                marginTop: 10, marginLeft: 30, paddingLeft: 10, paddingRight: 10,
                borderRadius: 10
            }} />

            <View style = {{marginTop:10}}>
            <Button title = "Đăng kí" />
            </View>

            <View style = {{marginTop:10}}>
            <Button title = "Trở về" />
            </View>

        </View>

    )

}
export default intents_sigin;
