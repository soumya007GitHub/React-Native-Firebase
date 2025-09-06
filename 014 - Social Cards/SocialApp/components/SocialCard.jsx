import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters';

export default function SocialCard({ id, icon, name }) {
    return (
        <View key={id} style={styles.container}>
            <View style={styles.iconContainer}>{icon}</View>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.sendContainer}>
                <FontAwesome name="send" size={scale(20)} color="#fff" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: scale(15),
        borderBottomWidth: 1,
        borderColor: '#d8d8d8ff'
    },
    iconContainer: {
        padding: scale(5),
        paddingHorizontal: scale(8),
        borderWidth: 1,
        borderColor: '#d8d8d8ff',
        borderRadius: scale(50),
    },
    text: {
        flex: 1,
        paddingLeft: scale(10)
    },
    sendContainer : {
        padding: scale(10),
        borderRadius: scale(100),
        backgroundColor: '#178AD9'
    }
})