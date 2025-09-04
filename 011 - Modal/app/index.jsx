import { useState } from "react";
import { View, Text, Button, Pressable, StyleSheet, Modal } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Button title="Show Modal" onPress={() => setShowModal(true)} />
        <Modal animationType="slide" visible={showModal} style={styles.modal}>
          <Text>This is a modal</Text>
          <Pressable onPress={() => setShowModal(false)}>
            <AntDesign name="closecircle" size={24} color="black" />
          </Pressable>
        </Modal>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ceff3cff'
  },
  modal: {
    backgroundColor: 'tomato'
  }
})