import { Text, View, ScrollView, Image, Button, Pressable, TouchableOpacity, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
    <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.userStory}/>
      <View style={styles.userStory}/>
      <View style={styles.userStory}/>
      <View style={styles.userStory}/>
      <View style={styles.userStory}/>
      <View style={styles.userStory}/>
    </ScrollView>
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.para}>This is a sample text.</Text>
      <Image style={styles.image1} source={require('../assets/images/react-logo.png')}/>
      <Image style={styles.image2} source={{uri: 'https://www.shutterstock.com/shutterstock/photos/2404385831/display_1500/stock-vector-spiderman-art-design-icon-vector-sticker-logo-sign-symbol-famous-movie-character-2404385831.jpg'}}/>
      <Button title="Click Here" style={styles.button} onPress={()=>Alert.alert('Button Clicked')}/>
      <TouchableOpacity onPress={()=>Alert.alert('Button With Feedback Clicked')} style={[styles.button, styles.touchableButton]}><Text>Button With Feedback</Text>
      </TouchableOpacity>
      <Pressable style={[styles.button, styles.pressableButton]}
      onPress={()=>Alert.alert('Pressable Button Clicked')}>
        <Image source={require('../assets/images/react-logo.png')}/>
        <Text>This is also a button</Text>
      </Pressable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#599df0'
  },
  heading: {
    fontSize: 40,
    fontWeight: '900'
  },
  para : {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 600
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
  },
  image1: {
    width: 200,
    height: 200
  },
  image2:{
    width: 350,
    height: 350
  },
  userStory : {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'yellow',
    marginHorizontal: 10
  }
})