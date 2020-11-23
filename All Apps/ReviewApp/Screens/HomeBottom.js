import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import { globalStyles as styles } from '../Styles/global';

function HomeBottom() {
    return (
        <View>
           <Text style={styles.TextBottom}>
                    <Text style={{color:'#15ddf1'}}>Privacy policy</Text> AND <Text style={{color:'#15ddf1'}}>Terms & Condition </Text></Text>
                <Text style={styles.TextBottom}>Version 1.6</Text>
        </View>
    )
}

export default HomeBottom
