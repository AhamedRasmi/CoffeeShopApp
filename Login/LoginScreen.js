import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';


const coffeeImg = { uri: "https://cdn.dribbble.com/userupload/3277077/file/original-f0931a940f4708b05afd722496903679.jpg?compress=1&resize=1504x1128" }

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" backgroundColor="#80683c" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    // duration="1500"
                    source={coffeeImg}
                    style={styles.image} />
            </View>

            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.title}>Stay Connected with {'\n'}everyone!</Text>
                <Text style={styles.text}>Sign In with your account!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinearGradient
                            colors={['#80683c', '#C6AB80']}
                            style={styles.linearGradient}>
                            <Text style={styles.textSignIn}>Get Started</Text>
                            <MaterialIcons
                                name='navigate-next'
                                color='#fff'
                                size={25} />
                        </LinearGradient    >
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80683c',
        // alignItems: 'center', justifyContent: 'center'
    },
    header: {
        flex: 2,
        backgroundColor: '#80683c',
        alignItems: 'center', justifyContent: 'center'

    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    image: {
        height: 220,
        width: 220,
        borderRadius: 120,
    },
    title: {
        fontSize: 22,
        fontWeight: '800'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 30
        // marginVertical: 20
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 30
    },
    linearGradient: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', alignItems: 'center',
        height: 50,
        width: 200,
    },
    textSignIn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
    }
})

export default LoginScreen;