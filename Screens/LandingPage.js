import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { data } from '../data/data';
import Carousel from './Carousel';
import DashboardScreen from './DashboardScreen';
import SnackList from './SnackList';
import WelcomeCard from './WelcomeCard';

const LandingPage = ({ navigation }) => {
    return (
        <ScrollView>
            <DashboardScreen navigation={navigation} />
            <WelcomeCard />
            <Carousel data={data} navigation={navigation} />
            <SnackList />
            <Carousel data={data} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default LandingPage;