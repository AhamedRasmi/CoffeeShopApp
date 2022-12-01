import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import LandingPage from '../Screens/LandingPage';
import ProfileScreen from '../Screens/ProfileScreen'
import LoginScreen from '../Login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferScreen from '../components/OfferScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
    )
}
const MainTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Landing"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#80683c', height: 65 }}
        >
            <Tab.Screen
                name="Landing"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Icons name="ice-cream" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <Icons name="aperture" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;