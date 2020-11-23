import React, { useState } from 'react';

import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

import HomeHeader from './HomeHeader';
import LoginForm from './LoginForm';
import HOmeBottom from './HomeBottom';

function Home({ navigation }) {
    return (
        <View>
            
            <HomeHeader />
            <LoginForm navigation={navigation} />
            <HOmeBottom />
            
        </View>
    )
}


export default Home
