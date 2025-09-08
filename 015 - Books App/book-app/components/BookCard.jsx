import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function BookCard({ item, setShowModal, setBookId, setBookName,
    setCoverImage,
    setPrice,
    setAuthor, setEditingBook, deleteBook }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item['cover-image']}}
                style={styles.bookCover} />
            <View style={styles.bookDetails}>
                <Text style={styles.bookTitle}>{item['book-name']}</Text>
                <Text>By - {item.author}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.iconsView}>
                <Pressable onPress={() => {
                    setShowModal(true);
                    setBookId(item.id);
                    setBookName(item['book-name']);
                    setCoverImage(item['cover-image']);
                    setPrice(item.price);
                    setAuthor(item.author);
                    setEditingBook(true);
                }}><Entypo name="edit" size={24} color="black" /></Pressable>
                <Pressable onPress={() => {
                    deleteBook(item.id);
                }}><AntDesign name="delete" size={24} color="black" /></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    bookCover: {
        width: 90,
        height: 130,
        borderRadius: 8,
        resizeMode: "stretch",
    },
    bookDetails: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "space-evenly",
    },
    bookTitle: {
        fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
    },
    price: {
        fontStyle: 'italic',
        color: '#020ffcff',
        fontWeight: 'bold'
    },
    iconsView: {
        justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 10,
    }
});