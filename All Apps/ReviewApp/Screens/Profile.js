import React from 'react';
import { detailStyles as Style } from '../Styles/detailsCss';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

function Profile({navigation}) {
    return (
        <View>
        <View style={Style.card}>
            <View style={Style.cardContent}>
            <View style={Style.container}>
                    <View style={Style.SectionStyle}>

                    <Image 
                        source={require('../../../assets/Images/ic_app_icon.png')}  
                        style={Style.profile} />
                    <Text style={Style.TextBeside}> Umesh B B </Text>
                    <MaterialIcons style={Style.edit} name="edit" size={38} color='#15ddf1' />

                    </View>

                </View>

            </View>
        </View>

        <View style={Style.card}>
            <View style={Style.cardContent}>
            <View style={Style.container}>
                    <View style={Style.SectionStyle}>

                    <MaterialIcons style={Style.address} name="place" size={25} color='#15ddf1' />
                    <Text style={Style.TextBeside}> Address </Text>
                    <View>
                    </View>
                    <Text style={Style.TextBottom}>
                     My address is my none of yours, 12S .. 564    
                    </Text>
                    </View>

                </View>

            </View>

            <View style={Style.cardContent}>
            <View style={Style.container}>
                    <View style={Style.SectionStyle}>

                    <MaterialIcons style={Style.address} name="call" size={25} color='#15ddf1' />
                    <Text style={Style.TextBeside}> Contact </Text>
                    <View>
                    </View>
                    <Text style={Style.TextBottom}>
                     8683389045    
                    </Text>
                    </View>

                </View>

            </View>
        </View>
        </View>
    )
}

export default Profile
