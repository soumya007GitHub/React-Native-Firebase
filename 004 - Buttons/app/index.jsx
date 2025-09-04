import { View, StyleSheet, Button, TouchableOpacity, Text, Alert, Pressable, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Click Here" style={styles.button} onPress={()=>Alert.alert('Button Clicked')}/>
      <TouchableOpacity onPress={()=>Alert.alert('Button With Feedback Clicked')} style={[styles.button, styles.touchableButton]}><Text>Button With Feedback</Text>
      </TouchableOpacity>
      <Pressable style={[styles.button, styles.pressableButton]}
      onPress={()=>Alert.alert('Pressable Button Clicked')}>
        <Image source={require('../assets/images/react-logo.png')}/>
        <Text>This is also a button</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#b3fcabff'
  },
  button: {
    marginVertical: 20
  },
  touchableButton : {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  pressableButton : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  }
})