import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'

const backImg = { uri: "https://img.icons8.com/ios/50/000000/back--v1.png" }
const Data = [
    {
        id: "1",
        title: "Tea",
        url: 'https://cdn.dribbble.com/userupload/1300345/file/original-79046161aca99b88ad56bc7ce34177ed.jpg?compress=1&resize=1200x900&vertical=top',
    },
    {
        id: "2",
        title: "Coffee",
        url: 'https://cdn.dribbble.com/userupload/1300349/file/original-1ab361ae9f6677c53975b8b37d86055b.jpg?compress=1&resize=1000x750&vertical=top',

    },
    {
        id: "3",
        title: "Ice Creams",
        url: "https://cdn.dribbble.com/users/2738683/screenshots/16223143/media/5ba3f1d87e155ccbb7f89f8176ebd6c0.jpg?compress=1&resize=1200x900&vertical=top",
    },
    {
        id: "4",
        title: "Drinks",
        url: "https://cdn.dribbble.com/users/6827497/screenshots/19263195/media/f6d6dc8ae07e75c927183a2536d4400f.jpg?compress=1&resize=1200x900&vertical=top",

    }
]

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 15, paddingTop: 20, paddingVertical: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backImg} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Explore</Text>
                <Text></Text>
            </View>
            <View style={styles.header}>
                <View style={styles.headerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                        <View style={styles.headerItemInner}>
                            <Image source={{ uri: 'https://cdn.tarladalal.com/members/9306/big/big_masala_chai_or_masala_tea-14441.jpg' }} style={{ height: '96%', width: '96%', borderRadius: 12 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '600' }}>{Data[0].title}</Text>

                </View>
                <View style={styles.headerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                        <View style={styles.headerItemInner}>
                            <Image source={{ uri: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} style={{ height: '96%', width: '96%', borderRadius: 12 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '600' }}>{Data[1].title}</Text>



                </View>

                <View style={styles.headerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                        <View style={styles.headerItemInner}>
                            <Image source={{ uri: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" }} style={{ height: '96%', width: '96%', borderRadius: 12 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '600' }}>{Data[2].title}</Text>


                </View>

                <View style={styles.headerItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                        <View style={styles.headerItemInner}>
                            <Image source={{ uri: "https://static.toiimg.com/photo/70994944.cms" }} style={{ height: '96%', width: '96%', borderRadius: 12 }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', color: '#000', fontWeight: '600' }}>{Data[3].title}</Text>

                </View>
            </View>

            {/* <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                <LinearGradient
                    colors={['#80683c', '#C6AB80']}
                    style={styles.box}>
                    <Text style={styles.coffeeOffer}>{Data[2].title}</Text>
                </LinearGradient>
            </TouchableOpacity> */}

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coffeeOffer: {
        fontSize: 16,
        fontWeight: '600'
    },
    topContent: {
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    headerItem: {
        height: '45%',
        width: '50%',
        padding: 5,
    },
    headerItemInner: {
        // flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileScreen;