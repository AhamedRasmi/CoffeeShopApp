import React, { useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const coffeeImg = { uri: "https://img.icons8.com/material-rounded/48/FFFFFF/coffee-to-go.png" }

const SignInScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" backgroundColor="#80683c" />
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome!</Text>
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <Animatable.View animation="bounceIn" style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={22}
                        color="grey"
                    />
                    <TextInput placeholder='Your Email' style={styles.textInput} autoCapitalize="none" />
                </Animatable.View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="grey"
                        size={22}
                    />
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        placeholder='Your Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={22}
                            /> :
                            <Feather
                                name="eye"
                                color="grey"
                                size={22}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
                    <LinearGradient
                        colors={['#80683c', '#C6AB80']}
                        style={styles.button}>
                        <Text style={styles.textSignIn}>Sign In</Text>
                        <Image source={coffeeImg} style={styles.coffeeImg} />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <View
                        style={styles.signUpButton}>
                        <Text style={styles.textSignUp}>Don't have an account? </Text>
                        <Text style={styles.signUpText}>Sign Up</Text>
                        <Image source={coffeeImg} style={styles.coffeeImg} />
                    </View>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80683c',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        paddingHorizontal: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    text_footer: {
        fontSize: 14,
        color: '#80683c',
        fontWeight: '600',
        marginVertical: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D2D2D2',
        paddingBottom: 10
    },
    textInput: {
        flex: 1,
        height: 40,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        flexDirection: 'row',
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        width: '95%',
        justifyContent: 'center',
        marginVertical: 50,
    },
    signUpButton: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20%'
    },
    textSignIn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    textSignUp: {
        color: '#80683c',
        fontSize: 14,
        fontWeight: '600',
        alignSelf: 'center',
        // marginHorizontal: 10,
    },
    signUpText: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
    },
    coffeeImg: {
        height: 35,
        width: 35,
        alignSelf: 'center',
    }
})

export default SignInScreen;