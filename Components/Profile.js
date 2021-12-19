import { logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image,TouchableHighlight } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import login from './Login';

import icon_back from './Picture/icon_back.png';
import icon_local from './Picture/icon_local.png';
import icon_school from './Picture/icon_school.png';
import icon_anhbia from './Picture/icon_anhbia.jpg';
import icon_avata from './Picture/icon_avata.jpg';


const intents_profile = ({navigation}) => {

    const back = () => {
        Alert.alert('tro ve');
    }

    const edit_profile = () => {
        navigation.navigate('Intent_Edit_profile');
    }

    const add_picture1 = () => {
        Alert.alert('Add picture 1');
    }

    const add_avata = () => {
        Alert.alert('add avata');
    }

    const new_post = () => {
        Alert.alert('new post');
    }

    const view_picture = () => {
        Alert.alert('View picture');
    }

    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>

                    <TouchableHighlight onPress={() => back()}>
                        <Image source={icon_back}
                            style={{ width: 30, height: 30 }} />
                    </TouchableHighlight>

                    <View style={{ width: '80%' }}>
                        <TextInput placeholder='Tìm kiếm' style={{
                            width: '100%', paddingTop: 5, paddingBottom: 5, backgroundColor: "#f9f4f4", paddingLeft: 10, paddingRight: 10,
                            borderRadius: 10
                        }} />
                    </View>
                </View>

                <View style={{ padding: 10 }} >
                    <TouchableHighlight onPress={() => view_picture()} >
                        <Image source={icon_anhbia}
                            style={{ width: 370, height: 220, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                    </TouchableHighlight>

                </View>

                <View>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 40, height: 40, marginTop: -60, borderRadius: 50, marginLeft: 330 }} />

                    <Image source={{ uri: 'https://static.thenounproject.com/png/187803-200.png' }}
                        style={{ width: 30, height: 30, marginTop: -35, marginLeft: 335 }} />

                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 140, height: 140, borderRadius: 100, marginTop: -70 }}>
                    </Image>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={icon_avata}
                        style={{ width: 130, height: 130, borderRadius: 100, marginTop: -140 }}>
                    </Image>
                </View>

                <View>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 40, height: 40, marginTop: -50, borderRadius: 50, marginLeft: 230 }} />

                    <Image source={{ uri: 'https://static.thenounproject.com/png/187803-200.png' }}
                        style={{ width: 30, height: 30, marginTop: -35, marginLeft: 235 }} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontStyle: 'normal' }} >
                        Thế Chung
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        marginTop: 5,
                        backgroundColor: '#66CCCC', borderRadius: 10, marginLeft: 10, alignItems: 'center',
                        flexDirection: 'row', justifyContent: 'center', width: 300
                    }}>
                        <Image source={{ uri: 'https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png', width: 30, height: 30 }}>
                        </Image>
                        <Button title='Thêm vào tin' color='black' onPress={() => new_post()} />
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#66CCCC', marginLeft: 10, borderRadius: 10, padding: 10 }}>
                        <Button title='...' onPress={() => edit_profile()} />
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ height: 2, width: '80%', backgroundColor: 'grey', marginTop: 5 }} />
                </View>

                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Tỉnh/Thành phố hiện tại</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <Image source={{ uri: 'https://e7.pngegg.com/pngimages/539/285/png-clipart-job-hunting-computer-icons-icon-design-suitcase-drawing-rectangle-employment.png', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Nơi làm việc</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <Image source={icon_school}
                     style = {{width:30, height:30}} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Trường học</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <Image source={icon_local} style = {{width:30, height:30}} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Quê quán</Text>
                </View>
            </ScrollView>

        </View>

    )

}
export default intents_profile;
