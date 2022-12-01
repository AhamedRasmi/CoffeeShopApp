import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const coffeeImg = { uri: "https://www.clipartmax.com/png/middle/135-1355348_coffee-bean-graphic-clip-art-library-paper-coffee-cup-clip-art.png" }

const Data = [
    {
        id: "1",
        title: "Ice Coffee",
        url: 'https://globalupfront.com/wp-content/uploads/2022/06/COFFEE.jpg',
        description: "Cool Coffee with Ice..",
        price: '₹380'
    },
    {
        id: "2",
        title: "Cream Coffee",
        url: "https://thumbs.dreamstime.com/b/hot-coffee-cup-isolated-black-background-view-above-clipping-path-164448195.jpg",
        description: "Extra Ice with suttle..",
        price: '₹220'
    },
    {
        id: "3",
        title: "Choco Ice Coffee",
        url: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        description: "Extra Ice with suttle..",
        price: '₹300'
    },
    {
        id: "4",
        title: "Chilled Coffee",
        url: "https://img.freepik.com/premium-photo/cup-coffee-coffee-beans_164008-356.jpg?w=826",
        description: "Extra Ice with suttle...",
        price: '₹310'
    }
]

const renderItem = ({ item, index }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.coffeeOffer}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.priceText}>{item.price} {item.offer}</Text>
        </View>
    )
}
const HotCoffeeItems = () => {
    return (

        <View
            style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.hiText}>Hot Coffee :</Text>
                </View>
            </View>

            <FlatList
                data={Data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={item => renderItem(item)}
                keyExtractor={Data => Data.id}
            />
        </View>
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
        bottom: 80
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 20,
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
    description: {
        fontSize: 11,

    },
    priceText: {
        fontWeight: '600',
        fontSize: 12,
        color: '#D9381E'
    },
    hiText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#306844',
        marginHorizontal: 20,
        marginVertical: 20,
    },
})

export default HotCoffeeItems;