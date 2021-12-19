import { ALIAS_KEYS, logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState} from 'react';
import { Text, View, TextInput, Button, Alert, document, Image, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ceil } from 'react-native-reanimated';

import icon_menu from './Picture/icon_menu.png';
import icon_search from './Picture/icon_search.png'
import icon_mess from './Picture/icon_mess.png'
import icon_home from './Picture/icon_home.png';
import icon_group from './Picture/icon_group.png';
import icon_noti from './Picture/icon_noti.png';
import icon_avata from './Picture/icon_avata.jpg';
import { getUsers } from '../src/firebase-access/user-access';

const newfeed = ({ navigation }) => {

    const Click_menu = () => {
        navigation.navigate('Intent_Menu');
    }

    const Click_profile = () => {
        navigation.navigate('Intent_Profile');
    }

    const Click_noti = () => {
     //   navigation.navigate('Intent_notify');
     
    }


    return (
        <View style={{ padding: 10, backgroundColor: '#EEEEEE', height: '100%' }}>

            <View style={{ flexDirection: 'row' }}>
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
                    <Image source={icon_home}
                        style={{ width: 50, height: 50 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={icon_group}
                        style={{ width: 50, height: 50 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/facebook-and-social-media-1/64/Facebook_and_Social_Media-02-512.png' }}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />
                </View>

                <View style={{ width: '20%', alignItems: 'center' }}>
                    <TouchableHighlight onPress = {() => Click_noti()}>
                        <Image source={icon_noti}
                            style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />
                    </TouchableHighlight>
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
                        <Image source={icon_avata}
                            style={{
                                width: 50, height: 50, marginLeft: 10, marginRight: 10,
                                borderRadius: 50
                            }} />
                    </TouchableHighlight>
                </View>

                <View style={{ width: '80%' }}>
                    <TextInput placeholder='Bạn đang nghĩ gì ?' style={{
                        paddingLeft: 10, paddingBottom: 5, paddingTop: 5,
                        backgroundColor: "#f9f4f4",
                        marginTop: 10, paddingRight: 20,
                        borderRadius: 10
                    }} />
                </View>

            </View>

            <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5, width: '100%' }}>
                <View style={{ width: '33%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://e7.pngegg.com/pngimages/238/551/png-clipart-youtube-live-streaming-media-broadcasting-computer-icons-youtube-game-text.png' }}
                        style={{ height: 50, width: 50 }} />
                </View>

                <View style={{ width: '33%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://banner2.cleanpng.com/20180426/pfw/kisspng-computer-icons-camera-photography-5ae221306ada91.9319799815247690724377.jpg' }}
                        style={{ height: 50, width: 50, marginLeft: 50 }} />
                </View>

                <View style={{ width: '33%', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2021/01/Zoom-icon-isolated-premium-vector-PNG.png' }}
                        style={{ height: 50, width: 50, marginLeft: 50 }} />
                </View>

            </View>


        </View>
    );
}
export default newfeed;

