import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const coffeeImg = { uri: "https://www.clipartmax.com/png/middle/135-1355348_coffee-bean-graphic-clip-art-library-paper-coffee-cup-clip-art.png" }

const Data = [
    {
        id: "1",
        title: "Ice Coffee",
        url: "https://img.freepik.com/free-photo/cold-coffee-drink-with-ice-splashes_144627-18384.jpg?w=360&t=st=1667819717~exp=1667820317~hmac=4afc4c63de3203d1551d8c6e94ca4291ee2494b83278eff2a6656ae17f44a622",
        description: "Cool Coffee with Ice..",
        price: '₹240'
    },
    {
        id: "2",
        title: "Cream Coffee",
        url: "https://as2.ftcdn.net/v2/jpg/02/08/04/75/1000_F_208047557_0ZTJD5PBMhVvBvftmBhVfawydSLz8mbz.jpg",
        // url: 'https://cdn.dribbble.com/userupload/1300349/file/original-1ab361ae9f6677c53975b8b37d86055b.jpg?compress=1&resize=1000x750&vertical=top',
        description: "Extra Ice with suttle..",
        price: '₹220'
    },
    {
        id: "3",
        title: "Choco Ice Coffee",
        url: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        // url: "https://cdn.dribbble.com/users/2738683/screenshots/16223143/media/5ba3f1d87e155ccbb7f89f8176ebd6c0.jpg?compress=1&resize=1200x900&vertical=top",
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
const IceCoffeeItems = () => {
    return (

        <View
            style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.hiText}>Iced Coffee :</Text>
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
        color: '#306844',
        fontWeight: '500',
        marginHorizontal: 20,
        marginVertical: 20,
    },
})

export default IceCoffeeItems;