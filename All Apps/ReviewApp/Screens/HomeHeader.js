import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function HomeHeader() {
    return (
        <View>
            <Image source={require('../../../assets/Images/ic_app_icon.png')} style={Styles.headerImage} />
                <Text style={Styles.title}>
                    <Text> Login </Text>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Text style={Styles.SignUp}> SignUp </Text>
                </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    headerImage: {
        width: '100%',
        height : 150,
    },
    title: {
        paddingLeft: '24%',
        paddingRight : '27%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'black',
        paddingBottom : 10,
        marginBottom : 20
    },
    SignUp: {
        color : '#575958'
    }
})

export default HomeHeader
