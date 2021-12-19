import { ALIAS_KEYS, logicalExpression, tSBigIntKeyword } from '@babel/types';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import login from './Login';

import icon_avata from './Picture/icon_avata.jpg';
import icon_anhbia from './Picture/icon_anhbia.jpg';
import icon_work from './Picture/icon_work.png';
import icon_school from './Picture/icon_school.png';

var Firebase = require('firebase');

const intents_edit_profile = ({ navigation }) => {

    var root = new Firebase("https://me-talk-firebase-default-rtdb.firebaseio.com/");

    const [state, setState] = useState({
        username: "",
        phone: "",
        passwork: "",
        confirm_passwork: "",
    })

    return (

        <View style={{
            backgroundColor: 'white',
            height: '100%'
        }} >
            <ScrollView>
                <View style = {{flexDirection:'row'}}>
                    <View style={{ width: '50%', marginLeft: 10 }}>
                        <Text style={{ fontSize: 25, marginTop: 10 }}>
                            Ảnh đại diện
                        </Text>
                    </View>
                    <View style={{width:'20%'}}>
                        </View>
                    <View style={{ width: '25%', marginRight: 10, marginTop:15 }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>
                            Chỉnh sửa
                        </Text>
                    </View>
                </View>

                <View style={{alignItems:'center', marginTop: 5}}>
                    <TouchableHighlight>
                        <Image source = {icon_avata} style = {{width:100, height:100, borderRadius:50}} />
                    </TouchableHighlight>
                </View>

                {/* anh bia */}
                <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

                <View style = {{flexDirection:'row'}}>
                    <View style={{ width: '50%', marginLeft: 10 }}>
                        <Text style={{ fontSize: 25, marginTop: 10 }}>
                            Ảnh bìa
                        </Text>
                    </View>
                    <View style={{width:'20%'}}>
                        </View>
                    <View style={{ width: '25%', marginRight: 10, marginTop:15 }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>
                            Chỉnh sửa
                        </Text>
                    </View>
                </View>

                <View style={{marginTop: 5}}>
                    <TouchableHighlight>
                        <Image source = {icon_anhbia} style = {{width:'90%', height:150, borderRadius:10,
                    marginLeft:10, marginRight:10}} />
                    </TouchableHighlight>
                </View>

                {/* Tieu su */}
                <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

                <View style = {{flexDirection:'row'}}>
                    <View style={{ width: '50%', marginLeft: 10 }}>
                        <Text style={{ fontSize: 25, marginTop: 10 }}>
                            Tiểu sử
                        </Text>
                    </View>
                    <View style={{width:'20%'}}>
                        </View>
                    <View style={{ width: '25%', marginRight: 10, marginTop:15 }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>
                            Chỉnh sửa
                        </Text>
                    </View>
                </View>

                <View style={{marginTop: 5, alignItems:'center'}}>
                    <Text style= {{fontSize:18}} >
                        Tiểu sử
                    </Text>
                </View>

                {/* Chi tiet */}
                <View style={{ height: 2, width: '100%', backgroundColor: 'grey', marginTop: 5 }} />

                <View style = {{flexDirection:'row'}}>
                    <View style={{ width: '50%', marginLeft: 10 }}>
                        <Text style={{ fontSize: 25, marginTop: 10 }}>
                            Tiểu sử
                        </Text>
                    </View>
                    <View style={{width:'20%'}}>
                        </View>
                    <View style={{ width: '25%', marginRight: 10, marginTop:15 }}>
                        <Text style={{ fontSize: 20, color: 'blue' }}>
                            Chỉnh sửa
                        </Text>
                    </View>
                </View>

                {/* edit cong viec */}
                <View style = {{flexDirection:'row'}}>
                    <Image source= {icon_work} style = {{width: '10%', height:30, marginLeft:10, marginTop:10}} />
                    <Text style= {{fontSize:25, marginLeft: 10, marginTop:15}}>
                        Công việc
                    </Text>
                </View>

                {/* Truong hoc */}
                <View style = {{flexDirection:'row'}}>
                    <Image source= {icon_school} style = {{width: '10%', height:30, marginLeft:10, marginTop:10}} />
                    <Text style= {{fontSize:25, marginLeft: 10, marginTop:15}}>
                        Đã học tại ...
                    </Text>
                </View>
                
            </ScrollView>
        </View>

    )

}
export default intents_edit_profile;
