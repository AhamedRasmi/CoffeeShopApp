import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import IceCoffeeItems from './IceCoffeeItems';
import HotCoffeeItems from './HotCoffeeItems';

const coffeeImg = { uri: "https://www.clipartmax.com/png/middle/135-1355348_coffee-bean-graphic-clip-art-library-paper-coffee-cup-clip-art.png" }

const Data = [
    {
        id: "1",
        title: "Roasted Coffee",
        url: 'https://cdn.dribbble.com/userupload/1300345/file/original-79046161aca99b88ad56bc7ce34177ed.jpg?compress=1&resize=1200x900&vertical=top',
        offer: '50%',
        price: '₹240 -'
    },
    {
        id: "2",
        title: "Dark Coffee",
        url: 'https://cdn.dribbble.com/userupload/1300349/file/original-1ab361ae9f6677c53975b8b37d86055b.jpg?compress=1&resize=1000x750&vertical=top',
        offer: '55%',
        price: '₹220 -'
    },
    {
        id: "3",
        title: "Choco Coffee",
        url: "https://cdn.dribbble.com/users/2738683/screenshots/16223143/media/5ba3f1d87e155ccbb7f89f8176ebd6c0.jpg?compress=1&resize=1200x900&vertical=top",
        offer: '47%',
        price: '₹300 -'
    },
    {
        id: "4",
        title: "Filter Coffee",
        url: "https://cdn.dribbble.com/users/6827497/screenshots/19263195/media/f6d6dc8ae07e75c927183a2536d4400f.jpg?compress=1&resize=1200x900&vertical=top",
        offer: '40%',
        price: '₹310 -'
    }
]

const renderItem = ({ item, index }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.coffeeOffer}>{item.title}</Text>
        </View>
    )
}
const OfferScreen = () => {
    return (
        <ScrollView>
            <LinearGradient
                colors={['#80683c', '#C6AB80']}
                style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={styles.hiText}>Hi Ahamed 👋🏼</Text>
                        <Text style={styles.description}>A good day starts with a good ☕, {'\n'}How do you want to start with {'\n'}your day?</Text>
                    </View>
                    <Image source={require('../assets/coffee2.png')} style={{ height: 100, width: 60, left: 40, marginTop: 50 }} />
                </View>
            </LinearGradient>
            <FlatList
                data={Data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={item => renderItem(item)}
                keyExtractor={Data => Data.id}
                style={{ bottom: 70 }}
            />
            <IceCoffeeItems />
            <HotCoffeeItems />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textView: {
        position: 'absolute',
        left: 5,
        margin: 10,
        bottom: 10
    },
    header: {
        height: 320,
        width: '100%',
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 70,
        marginHorizontal: 14,
        marginVertical: 10,
    },
    coffeeText: {
        marginVertical: 15,
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 15
    },
    coffeeOffer: {
        fontSize: 12,
        fontWeight: '700',
    },
    priceText: {
        fontWeight: '600',
        fontSize: 12,
        color: '#D9381E'
    },
    hiText: {
        fontSize: 24,
        color: '#3a3b3c',
        fontWeight: '500',
        marginHorizontal: 20,
        marginVertical: 20,
        marginTop: 40
    },
    description: {
        fontSize: 13,
        color: '#4B371C',
        marginHorizontal: 20,
        lineHeight: 25
    }
})

export default OfferScreen;