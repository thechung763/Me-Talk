import { logicalExpression, tSBigIntKeyword } from '@babel/types';
import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import login from './Login';


const intents_notify = (navigation) => {

    

    return (
        <ScrollView style = {{height:'100%', width:'100%'}}>
            <View style={{ backgroundColor: 'white', width: '100%', height:'100%' }}>

               <Text>
                   NOTIFY
               </Text>

            </View>
        </ScrollView>

    )

}
export default intents_notify;
