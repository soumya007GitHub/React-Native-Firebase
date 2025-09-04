import { View, Dimensions, StyleSheet } from "react-native";

export default function Index() {
  const HEIGHT = Dimensions.get('screen').height;
  const WIDTH = Dimensions.get('screen').width;
  return (
    <>
      <View style={styles.container}/>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    height : Dimensions.get('screen').height/2,
    width: Dimensions.get('screen').width/2,
    backgroundColor: '#f9cf93ff'
  }
})