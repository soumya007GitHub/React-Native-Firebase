import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Index() {
  const [value, setValue] = useState("");
  return (
    <>
      <View style={styles.container}>
        <TextInput value={value} onChangeText={setValue} placeholder="Enter text" style={{borderWidth: 1, width: '80%'}}/>
        <Text>{value}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9cf93ff'
  }
})