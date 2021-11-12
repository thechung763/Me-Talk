import { logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, document, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const newfeed = (props) => {

    return (
        <View style={{ padding: 10, backgroundColor: 'yellow', paddingTop: 40 }}>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 30 }}>Me Talk</Text>

                <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 150 }}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' }}
                        style={{ width: 50, height: 50 }} />

                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKDygETkC6_IYMoTmZo7hh2wMUB4EW_-g5Q&usqp=CAU' }}
                        style={{ width: 50, height: 50, marginLeft: 10 }} />
                </View>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                <Image source={{ uri: 'https://www.apmedia.vn/wp-content/uploads/2018/02/Home-Icon.png' }}
                    style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/20/20697.png' }}
                    style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/facebook-and-social-media-1/64/Facebook_and_Social_Media-02-512.png' }}
                    style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                <Image source={{ uri: 'https://glovi.vn/wp-content/uploads/2018/04/chuong-goi-khong-day-icon-1521165655.png' }}
                    style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

                <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/916/PNG/512/Menu_icon_icon-icons.com_71858.png' }}
                    style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }} />

            </View>

            <View>
                <Text style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    --------------------------------------------------------
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>

                <Image source={{ uri: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/127638590_2896258493926269_3092226733681608412_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1oCHHEVZL2gAX-bPlxd&_nc_ht=scontent.fhan14-1.fna&oh=ced4062129637fb568715bfcdab3382a&oe=61B0997C' }}
                    style={{
                        width: 50, height: 50, marginLeft: 10, marginRight: 10,
                        borderRadius: 50
                    }} />

                <TextInput placeholder='Tài khoản' style={{
                    width: 280, height: 30, backgroundColor: "#f9f4f4",
                    marginTop: 10, paddingRight: 20,
                }}/>

            </View>

            <View>
                <Text style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    --------------------------------------------------------
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={{ uri: 'https://e7.pngegg.com/pngimages/238/551/png-clipart-youtube-live-streaming-media-broadcasting-computer-icons-youtube-game-text.png' }}
                    style={{ height: 50, width: 50 }} />

                <Image source={{ uri: 'https://banner2.cleanpng.com/20180426/pfw/kisspng-computer-icons-camera-photography-5ae221306ada91.9319799815247690724377.jpg' }}
                    style={{ height: 50, width: 50, marginLeft: 50 }} />

                <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2021/01/Zoom-icon-isolated-premium-vector-PNG.png' }}
                    style={{ height: 50, width: 50, marginLeft: 50 }} />

            </View>


        </View>
    );
}
export default newfeed;

