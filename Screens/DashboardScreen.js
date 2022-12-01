import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const userImg = { uri: "https://i.mdel.net/i/db/2019/5/1125546/1125546-500w.jpg" }
const notification = { uri: "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-notification-bell-web-smashingstocks-glyph-smashing-stocks.png" }
const searchImg = { uri: "https://img.icons8.com/material-outlined/24/EBEBEB/search--v1.png" }

export default function DashboardScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={userImg} style={styles.userImg} />
                </TouchableOpacity>
                <Text style={styles.name}>Hi Ahamed Rasmi!</Text>
                {/* <Image source={notification} style={styles.notification} /> */}
            </View>
            <LinearGradient
                colors={['#80683c', '#C6AB80']}
                style={styles.search}>
                <Image source={searchImg} style={styles.searchImg} />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                />
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '100%',
        backgroundColor: '#80683c'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25
    },
    userImg: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginHorizontal: 12
    },
    notification: {
        height: 35,
        width: 35,
        marginLeft: '30%'
    },
    input: {
        height: 50,
        width: '100%',
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        // backgroundColor: '#C8B88A',
        backgroundColor: '#C6AB80',
        alignSelf: 'center',
        height: 50,
        width: '90%',
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 0.5
    },
    searchImg: {
        height: 30,
        width: 30,
        marginHorizontal: 10
    }
});
