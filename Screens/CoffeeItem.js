import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Data = [
    {
        id: "1",
        title: "Roasted Coffee",
        url: 'https://cdn.dribbble.com/userupload/1300345/file/original-79046161aca99b88ad56bc7ce34177ed.jpg?compress=1&resize=1200x900&vertical=top',
        offer: '50%',
        price: '₹240 -'
    },
    {
        id: "2",
        title: "Dark Coffee",
        url: 'https://cdn.dribbble.com/userupload/1300349/file/original-1ab361ae9f6677c53975b8b37d86055b.jpg?compress=1&resize=1000x750&vertical=top',
        offer: '55%',
        price: '₹220 -'
    },
    {
        id: "3",
        title: "Choco Coffee",
        url: "https://cdn.dribbble.com/users/2738683/screenshots/16223143/media/5ba3f1d87e155ccbb7f89f8176ebd6c0.jpg?compress=1&resize=1200x900&vertical=top",
        offer: '47%',
        price: '₹300 -'
    },
    {
        id: "4",
        title: "Filter Coffee",
        url: "https://cdn.dribbble.com/users/6827497/screenshots/19263195/media/f6d6dc8ae07e75c927183a2536d4400f.jpg?compress=1&resize=1200x900&vertical=top",
        offer: '40%',
        price: '₹310 -'
    }
]

const renderItem = ({ item, index }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.coffeeOffer}>{item.title}</Text>
            <Text style={styles.priceText}>{item.price} {item.offer}</Text>

        </View>
    )
}
const CoffeeItem = () => {


    return (
        <View>
            <Text style={styles.coffeeText}>Drink what makes you happy</Text>
            <TouchableOpacity>
                <FlatList
                    data={Data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={item => renderItem(item)}
                    keyExtractor={Data => Data.id}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
        position: 'absolute',
        left: 5,
        margin: 10,
        bottom: 10
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginHorizontal: 14,
        marginVertical: 10,

    },
    coffeeText: {
        marginVertical: 15,
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 15
    },
    coffeeOffer: {
        fontSize: 12,
        fontWeight: '700',
    },
    priceText: {
        fontWeight: '600',
        fontSize: 12,
        color: '#D9381E'
    },
})

export default CoffeeItem;