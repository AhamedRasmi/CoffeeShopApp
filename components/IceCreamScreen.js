import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const backImg = { uri: "https://img.icons8.com/ios/50/000000/back--v1.png" }

const Data = [
    {
        id: "1",
        url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        name: "Strawberry Cone"
    },
    {
        id: "2",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/14/69/d9/home-made-black-currant.jpg?w=800&h=-1&s=1",
        name: "Black Current"
    },
    {
        id: "3",
        url: "https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        name: "Milk"
    },
    {
        id: "4",
        url: "https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        name: "Milk"
    },
    {
        id: "5",
        url: "https://images.unsplash.com/photo-1622090860720-c4a77e146284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        name: "Milk"
    },
    {
        id: "6",
        url: "https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Pistha"
    }

]

const IceCreamScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 15, paddingTop: 10, paddingVertical: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backImg} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Ice Cream</Text>
                <Text></Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: Data[0].url }} style={styles.image} />
                    <Text style={[styles.textSignIn, { color: '#' }]}>{Data[0].name}</Text>
                    <Image source={{ uri: Data[1].url }} style={styles.smallImg} />
                    <Text style={[styles.textSignIn, { color: '#7F2A3C' }]}>{Data[1].name}</Text>
                    <Image source={{ uri: Data[2].url }} style={styles.image} />
                    <Text style={styles.textSignIn}>{Data[2].name}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', bottom: '10%' }}>
                    <Image source={{ uri: Data[3].url }} style={styles.smallImg} />
                    <Text style={styles.textSignIn}>{Data[3].name}</Text>
                    <Image source={{ uri: Data[4].url }} style={styles.image} />
                    <Text style={styles.textSignIn}>{Data[0].name}</Text>
                    <Image source={{ uri: Data[5].url }} style={styles.smallImg} />
                    <Text style={[styles.textSignIn, { color: '#8CB360' }]}>{Data[5].name}</Text>
                </View>
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fcd2dc',
    },
    image: {
        height: '32%',
        width: '130%',
        borderRadius: 12
    },
    smallImg: {
        height: '20%',
        width: '130%',
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: '800'
    },
    textSignIn: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        alignItems: 'center',
        // marginHorizontal: 20,
        marginVertical: 10
    }
})

export default IceCreamScreen;