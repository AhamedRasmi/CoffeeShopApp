import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const backgroundImg = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3ye8hbcR5HMB15IA84Zj2xXUlVrqEMISvQ&usqp=CAU' }
const userImg = { uri: "https://i.mdel.net/i/db/2019/5/1125546/1125546-500w.jpg" }
const CustomDrawer = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#C6AB80' }}>
                <Image source={userImg} style={{ height: 90, width: 90, borderRadius: 50, marginBottom: 20, marginHorizontal: 20 }} />
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>  Ahamed Rasmi</Text>
                <View style={{ flex: 1, paddingTop: 10, backgroundColor: '#fff' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Ionicons name="exit-outline" size={25} />
                        <Text style={{ marginHorizontal: 20 }}>Sign out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;