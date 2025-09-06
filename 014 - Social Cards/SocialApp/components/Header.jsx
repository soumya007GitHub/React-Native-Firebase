import { View, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons name="chevron-back" size={scale(20)} color="black" />
            </View>
            <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: '#ECF0F4',
        padding: scale(5),
        borderRadius: scale(50)
    },
    avatar: {
        width: scale(32),
        height: scale(32),
        borderRadius: scale(50)
    }
})