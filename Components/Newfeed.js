import { ALIAS_KEYS, logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, document, Image } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

import icon_menu from './Picture/icon_menu.png';
import icon_search from './Picture/icon_search.png'
import icon_mess from './Picture/icon_mess.png'

const newfeed = ({ navigation }) => {

    const Click_menu = () => {
        navigation.navigate('Intent_menu');
    }

    const Click_profile = () => {
        navigation.navigate('Intent_profile');
    }

    return (
        <View style={{ padding: 10, backgroundColor: '#EEEEEE', height: '100%' }}>

            <View style={{ flexDirection: 'row'}}>
                <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 30 }}>Me Talk</Text>
                </View>


                <View style={{ alignItems: 'center', flexDirection: 'row', width: '30%' }}>
                    <Image source={icon_search}
                        style={{ width: 50, height: 50 }} />

                    <Image source={icon_mess}
                        style={{ width: 50, height: 50, marginLeft: 10 }} />
                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://www.apmedia.vn/wp-content/uploads/2018/02/Home-Icon.png' }}
                        style={{ width: 50, height: 50 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/20/20697.png' }}
                        style={{ width: 50, height: 50 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/facebook-and-social-media-1/64/Facebook_and_Social_Media-02-512.png' }}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://glovi.vn/wp-content/uploads/2018/04/chuong-goi-khong-day-icon-1521165655.png' }}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <TouchableHighlight onPress={() => Click_menu()}>
                        <Image source={icon_menu}
                            style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />
                    </TouchableHighlight>
                </View>

            </View>

            <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

            <View style={{ flexDirection: 'row', marginTop: 5, width: '100%' }}>

                <View style={{ width: '20%' }}>
                    <TouchableHighlight onPress={() => Click_profile()}>
                        <Image source={{ uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/127638590_2896258493926269_3092226733681608412_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1oCHHEVZL2gAX-bPlxd&_nc_ht=scontent.fhan14-1.fna&oh=ced4062129637fb568715bfcdab3382a&oe=61B0997C' }}
                            style={{
                                width: 50, height: 50, marginLeft: 10, marginRight: 10,
                                borderRadius: 50
                            }} />
                    </TouchableHighlight>
                </View>

                <View style={{ width: '80%' }}>
                    <TextInput placeholder='Tài khoản' style={{
                        paddingLeft: 10, paddingBottom: 5, paddingTop: 5,
                        backgroundColor: "#f9f4f4",
                        marginTop: 10, paddingRight: 20,
                        borderRadius: 10
                    }} />
                </View>

            </View>

            <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, width: '100%' }}>
                <View style={{ width: '33%', alignItems:'center' }}>
                    <Image source={{ uri: 'https://e7.pngegg.com/pngimages/238/551/png-clipart-youtube-live-streaming-media-broadcasting-computer-icons-youtube-game-text.png' }}
                        style={{ height: 50, width: 50 }} />
                </View>

                <View style={{ width: '33%', alignItems:'center' }}>
                    <Image source={{ uri: 'https://banner2.cleanpng.com/20180426/pfw/kisspng-computer-icons-camera-photography-5ae221306ada91.9319799815247690724377.jpg' }}
                        style={{ height: 50, width: 50, marginLeft: 50 }} />
                </View>

                <View style={{ width: '33%', alignItems:'center'}}>
                    <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2021/01/Zoom-icon-isolated-premium-vector-PNG.png' }}
                        style={{ height: 50, width: 50, marginLeft: 50 }} />
                </View>

            </View>


        </View>
    );
}
export default newfeed;

