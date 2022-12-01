import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Offer')}>
            <View style={styles.cardView}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        height: height / 3,
        width: width - 20,
        alignSelf: 'center',
        marginHorizontal: 8,
        marginVertical: 6,
        backgroundColor: '#C8B88A',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    textView: {
        position: 'absolute',
        left: 5,
        margin: 10,
        bottom: 10
    },
    image: {
        height: height / 3,
        width: width - 20,
        borderRadius: 10,
    },
    itemTitle: {
        color: '#fff',
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    itemDescription: {
        color: '#fff',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    }
})

export default CarouselItem;