import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Login/LoginScreen';
import SignInScreen from '../Login/SignInScreen';
import SignUpScreen from '../Login/SignUpScreen';
import OfferScreen from '../components/OfferScreen';


const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;