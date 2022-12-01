import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const coffeeImg = { url: 'https://cdn.dribbble.com/userupload/1300345/file/original-79046161aca99b88ad56bc7ce34177ed.jpg?compress=1&resize=1200x900&vertical=top' }
export default function WelcomeCard() {
    return (
        <LinearGradient
            colors={['#C6AB80', '#80683c']}
            style={styles.container}>
            <View style={{ marginTop: 20, }}>
                <Text style={styles.welcome}>Offers</Text>
                <Text style={styles.text}>Up to 60% off, deal of the day {'\n'}and other great offers!</Text>
            </View>
            <View style={styles.cardView} >
                <Text style={styles.percentageText1}>UP TO</Text>
                <Text style={styles.percentageText2}>60%</Text>
                <Text style={styles.percentageText3}>OFF</Text>

            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '94%',
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor: '#C6AB80',
        borderBottomWidth: 3,
        borderRightWidth: 2,
        borderColor: '#80683c',
        borderRadius: 12,
        flexDirection: 'row'
    },
    welcome: {
        fontSize: 19,
        fontWeight: '500',
        color: '#3a3b3c',
        marginVertical: 2,
        marginHorizontal: 25
    },
    text: {
        fontSize: 11,
        fontWeight: '500',
        color: '#80683c',
        marginHorizontal: 25
    },
    cardView: {
        height: 120,
        width: 120,
        alignSelf: 'center',
        borderRadius: 60,
        left: 60,
        opacity: 0.7,
        backgroundColor: '#FFF'
    },
    percentageText1: {
        fontSize: 10,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 15,
        // color: '#D9381E'

    },
    percentageText2: {
        fontWeight: '800',
        fontSize: 25,
        alignSelf: 'center',
        bottom: 6,
        color: '#D9381E'
    },
    percentageText3: {
        fontWeight: '600',
        fontSize: 16,
        alignSelf: 'center',
        bottom: 12,
        // color: '#D9381E'

    }
})