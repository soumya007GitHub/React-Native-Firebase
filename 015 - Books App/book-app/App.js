import axios from 'axios';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, ActivityIndicator, Pressable, Modal, Button, Alert } from 'react-native';
import BookCard from './components/BookCard';
import TextInputField from './components/TextInputField';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [price, setPrice] = useState(null);
  const [author, setAuthor] = useState('');
  const [editingBook, setEditingBook] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBooks();
  }, []);

  async function getBooks() {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://68bc48e80f2491613ede8d5b.mockapi.io/book');
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
      Alert.alert("Error", "Unable to fetch books");
    } finally {
      setIsLoading(false);
    }
  }
  async function postBooks(bookName, coverImage, price, author) {
    try {
      await axios.post('https://68bc48e80f2491613ede8d5b.mockapi.io/book', {
        "book-name": bookName,
        "cover-image": coverImage,
        "price": price,
        "author": author
      });
      getBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  }
  async function editBook(id, bookName, coverImage, price, author) {
    try {
      await axios.put(`https://68bc48e80f2491613ede8d5b.mockapi.io/book/${id}`, {
        "book-name": bookName,
        "cover-image": coverImage,
        "price": price,
        "author": author
      });
      getBooks();
      setEditingBook(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }
  async function deleteBook(id) {
    try {
      await axios.delete(`https://68bc48e80f2491613ede8d5b.mockapi.io/book/${id}`);
      Alert.alert("Book Deleted!");
      getBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#020ffcff" />}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={books}
        renderItem={({ item }) =>
          <BookCard item={item} setShowModal={setShowModal}
            setBookId={setBookId}
            setBookName={setBookName}
            setCoverImage={setCoverImage}
            setPrice={setPrice}
            setAuthor={setAuthor}
            setEditingBook={setEditingBook}
            deleteBook={deleteBook}
          />
        }
        keyExtractor={item => item.id}
      />
      <Pressable onPress={() => setShowModal(true)} style={styles.button}>
        <FontAwesome6 name="add" style={styles.buttonIcon} size={30} />
      </Pressable>
      {showModal && <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
          setBookId('');
          setBookName('');
          setCoverImage('');
          setPrice('');
          setAuthor('');
          setEditingBook(false);
        }}>
        <View style={styles.modalView}>
          <TextInputField placeholder="Book Name" initialState={bookName} setInitialState={setBookName} />
          <TextInputField placeholder="Cover Image URL" initialState={coverImage} setInitialState={setCoverImage} />
          <TextInputField placeholder="Price" initialState={price} setInitialState={setPrice} keyboardType={'decimal-pad'} />
          <TextInputField placeholder="Author Name" initialState={author} setInitialState={setAuthor} />
          <Button title={editingBook ? "Save Changes" : "Add Book"} onPress={() => {
            if (!editingBook) {
              postBooks(bookName, coverImage, price, author);
              setShowModal(false);
              setBookName('');
              setCoverImage('');
              setPrice('');
              setAuthor('');
              Alert.alert("Book Added");
              getBooks();
            }
            else {
              editBook(bookId, bookName, coverImage, price, author);
              setShowModal(false);
              setBookId('');
              setBookName('');
              setCoverImage('');
              setPrice('');
              setAuthor('');
              Alert.alert("Book Edited " + bookId);
              getBooks();
            }
          }} />
        </View>
      </Modal>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 50,
    marginBottom: StatusBar.currentHeight || 50,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#020ffcff',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    color: '#fff',
  },
  modalView: {
    padding: 10
  }
});
