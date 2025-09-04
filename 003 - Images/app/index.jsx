import { StyleSheet, SafeAreaView, Image} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image1} source={require('../assets/images/react-logo.png')}/>
      <Image style={styles.image2} source={{uri: 'https://www.shutterstock.com/shutterstock/photos/2404385831/display_1500/stock-vector-spiderman-art-design-icon-vector-sticker-logo-sign-symbol-famous-movie-character-2404385831.jpg'}}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f97c7cff'
  },
  image1: {
    width: 200,
    height: 200
  },
  image2:{
    width: 350,
    height: 350
  }
})