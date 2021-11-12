import { logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import login from './Login';
import { NavigationContainer } from '@react-navigation/native';


const intents_profile = (props) => {

    const Stack = createStackNavigator();


    const back = () => {
        Alert.alert('tro ve');
    }

    const edit_profile = () => {
        Alert.alert('edit profile');
    }

    return (
        <NavigationContainer>
            <View style={{ backgroundColor: 'white' }}>
                <Stack.Navigator>
                    <Stack.Screen name="Notifications" component={login} />

                </Stack.Navigator>
                <View style={{ marginTop: 40, marginLeft: 10, flexDirection: 'row' }}>

                    <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/93/93634.png' }}
                        style={{ width: 30, height: 30 }} />

                    <TextInput placeholder='Tìm kiếm' style={{
                        width: 300, height: 30, backgroundColor: "#f9f4f4", paddingLeft: 10, paddingRight: 10,
                        borderRadius: 10, marginLeft: 10
                    }} />
                </View>

                <View style={{ padding: 10 }} >
                    <Image source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/186558330_3022952141256903_7409483946432394087_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8RqEe7jxifsAX-VtWkI&_nc_ht=scontent.fhan2-1.fna&oh=c7b7d712e9ae482d41cd098d4c7e11ce&oe=61B27AF4' }}
                        style={{ width: 370, height: 220, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                </View>

                <View>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 40, height: 40, marginTop: -60, borderRadius: 50, marginLeft: 330 }}></Image>
                    <Image source={{ uri: 'https://static.thenounproject.com/png/187803-200.png' }}
                        style={{ width: 30, height: 30, marginTop: -35, marginLeft: 335 }}></Image>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 140, height: 140, borderRadius: 100, marginTop: -70 }}>
                    </Image>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/127638590_2896258493926269_3092226733681608412_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1oCHHEVZL2gAX-bPlxd&tn=Bnst2hN9oXTaKp15&_nc_ht=scontent.fhan2-1.fna&oh=4937cda6b798c6fcb2bcffd389ed4e3f&oe=61B0997C' }}
                        style={{ width: 130, height: 130, borderRadius: 100, marginTop: -140 }}>
                    </Image>
                </View>

                <View>
                    <Image source={{ uri: 'https://besthqwallpapers.com/Uploads/30-11-2019/113897/thumb2-white-fabric-macro-fabric-textures-white-fabric-background-white-backgrounds.jpg' }}
                        style={{ width: 40, height: 40, marginTop: -50, borderRadius: 50, marginLeft: 230 }}></Image>
                    <Image source={{ uri: 'https://static.thenounproject.com/png/187803-200.png' }}
                        style={{ width: 30, height: 30, marginTop: -35, marginLeft: 235 }}></Image>
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
                        <Button title='Thêm vào tin' color='black' />
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#66CCCC', marginLeft: 10, borderRadius: 10, padding: 10 }}>
                        <Button title='...' onPress={() => edit_profile()} />
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        --------------------------------------------------
                    </Text>
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
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JSrugWGXg1DPPGc79-i5bZtiZpsj6Yf_Xw&usqp=CAU', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Trường học</Text>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: 'row' }}>
                    <Image source={{ uri: 'https://static.thenounproject.com/png/51274-200.png', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20, marginTop: 3, marginLeft: 10 }}>Quê quán</Text>
                </View>

            </View>
        </NavigationContainer>

    )

}
export default intents_profile;
