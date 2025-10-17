import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import VStack from '../../components/Stacks/VStack';

import todayImage from '../../assets/imgs/today.jpg';

export default function TaskList(){
    return (
        <VStack style={{flex: 1}} >
            <ImageBackground source={todayImage} style={{flex: 3}} >
            </ImageBackground>

            <View style={{flex: 7}}>
            <Text style={{fontSize: 24, color: '#000'}}>Task List</Text>
            </View>
        </VStack> 
    );
}