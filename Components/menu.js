import { ALIAS_KEYS, logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image, Settings } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import icon_home from './Picture/icon_home.png';
import icon_group from './Picture/icon_group.png';
import icon_watch from './Picture/icon_watch.png';
import icon_noti from './Picture/icon_noti.png';
import icon_menu from './Picture/icon_menu.png';
import icon_tich from './Picture/icon_tich.png';
import icon_avata from './Picture/icon_avata.jpg';


import icon_henho from './Picture/icon_henho.png';
import icon_flag from './Picture/icon_flag.png';
import icon_event from './Picture/icon_event.png';
import icon_search from './Picture/icon_search.png'

const intent_menu = ({navigation}) => {


    const view_profile = () => {
        navigation.navigate("Intent_profile");
    }

    const search_friend = () => {
        Alert.alert('search friend');
    }

    const view_group = () => {
        Alert.alert('View group');
    }
    const view_maketplace = () => {
        Alert.alert('View MaketPlace');
    }

    const video_watch = () => {
        Alert.alert('Video Watch');
    }

    const search = () => {
        Alert.alert('Nội dung search: ' + state.text_search);
    }

    const ki_niem = () => {
        Alert.alert('Ki niem');
    }

    const view_trang = () => {
        Alert.alert('Trang');
    }

    const view_henho = () => {
        Alert.alert('Hen ho');
    }

    const view_event = () => {
        Alert.alert('Event');
    }

    const click_Settings = () => {
        Alert.alert('Settings');
    }

    const click_logout = () => {
        navigation.navigate('Intent_login');
    }


    { /* bien du lieu */ }
    const [state, setState] = useState({
        text_search: ''
    })

    const get_search = (value) => {
        setState({
            ...state,
            text_search: value
        })
    }
    return (
        <View style={{ padding: 10, backgroundColor: '#EEEEEE' }}>

            <ScrollView>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                    <Image source={icon_home}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                    <Image source={icon_group}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                    <Image source={icon_watch}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                    <Image source={icon_noti}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                    <Image source={icon_menu}
                        style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                </View>

                <View>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        --------------------------------------------------------
                    </Text>
                </View>

                { /* Back and search */}
                <View style={{ marginTop: 5, marginLeft: 10, flexDirection: 'row' }}>

                    <Text style={{ fontSize: 30 }}>
                        Menu
                    </Text>

                    <TextInput placeholder='Tìm kiếm' style={{
                        width: 250, height: 30, backgroundColor: "#f9f4f4", paddingLeft: 10, paddingRight: 10,
                        borderRadius: 10, marginLeft: 10, paddingRight: 50
                    }} onChangeText={value => get_search(value)} />

                    <TouchableHighlight onPress={() => search()}>
                        <Image source={icon_tich}
                            style={{ width: 30, height: 30 }} />
                    </TouchableHighlight>

                </View>

                { /* View profile */}
                <TouchableHighlight onPress={() => view_profile()}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 5 }}>
                            <Image source={icon_avata}
                                style={{ width: 70, height: 70, borderRadius: 50 }} />
                        </View>
                        <View>
                            <Text style={{ alignContent: 'center', justifyContent: 'center', fontSize: 25, marginTop: 10, marginLeft: 20 }} >
                                Thế Chung
                            </Text>
                            <Button title='Xem trang cá nhân của bạn'
                                style={{ marginTop: -5 }} color='black' />
                        </View>
                    </View>

                </TouchableHighlight>

                <View>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        --------------------------------------------------------
                    </Text>
                </View>

                { /* Search friend */}
                <TouchableHighlight onPress={() => search_friend()} >

                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={icon_search}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Tìm kiếm bạn bè
                            </Text>
                        </View>
                    </View>

                </TouchableHighlight>

                { /* Nhóm */}
                <TouchableHighlight onPress={() => view_group()}>
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/qigong-qi-energy-power-chakra/316/qi-gong-power-003-512.png' }}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Nhóm
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* Hẹn hò */}
                <TouchableHighlight onPress={() => view_henho()} >
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={icon_henho}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Hẹn hò
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* MaketPlace */}
                <TouchableHighlight onPress={() => view_maketplace()}>
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={{ uri: 'https://www.freeiconspng.com/thumbs/market-icons/market-icon-18.png' }}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                MaketPlace
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* Video trên Watch */}
                <TouchableHighlight onPress={() => video_watch()}>
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/23.Videos-512.png' }}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Video trên Watch
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* Kỉ niệm */}
                <TouchableHighlight onPress={() => ki_niem()} >
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/32/32223.png' }}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Kỉ niệm
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* Trang */}
                <TouchableHighlight onPress={() => view_trang()} >
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={icon_flag}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Trang
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                { /* Sự kiện */}
                <TouchableHighlight onPress={() => view_event()} >
                    <View style={{ backgroundColor: 'white', height: 70, borderRadius: 20, padding: 10, flexDirection: 'row', marginTop: 10 }}>
                        <View>
                            <Image source={icon_event}
                                style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <Text style={{ marginLeft: 20, fontSize: 20 }} >
                                Sự kiện
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <View style = {{marginTop:10, borderRadius:10, backgroundColor: '#D8D8D8'}} >
                    <Button title = 'Cài đặt' color = 'black' onPress = {() => click_Settings()} />
                </View>
                
                <View style = {{marginTop:10, borderRadius:10, backgroundColor: '#D8D8D8', marginBottom: 20}} >
                    <Button title = 'Đăng xuất' color = 'black' onPress = {() => click_logout()} />
                </View>

            </ScrollView>

        </View>

    )
}

export default intent_menu;