import React from 'react';
import MainTab from '../TabScreens/MainTab';
import IceCreamScreen from '../components/IceCreamScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OfferScreen from '../components/OfferScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={props => <CustomDrawer {...props}
            />}
        >
            <Drawer.Screen
                name="MainTab"
                component={MainTab}
                options={{
                    drawerIcon: ({ color }) => {
                        <Ionicons name="home-outline" size={22} color={color} />
                    }
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => {
                        <Ionicons name="person-outline" size={22} color={color} />
                    }
                }} />
            <Drawer.Screen name="IceCream" component={IceCreamScreen}
                options={{
                    drawerIcon: ({ color }) => {
                        <Ionicons name="settings-outline" size={22} color={color} />
                    }
                }} />

            <Drawer.Screen name="Offer" component={OfferScreen}
                options={{
                    drawerIcon: ({ color }) => {
                        <Ionicons name="settings-outline" size={22} color={color} />
                    }
                }} />
        </Drawer.Navigator>
    )
}

export default AppStack;