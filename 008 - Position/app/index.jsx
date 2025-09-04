import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container1}></View>
        <View style={styles.container2}></View>
        <View style={styles.container3}></View>
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
    backgroundColor: '#f9cf93ff'
  },
  container1 : {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  container2 : {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position: 'relative',
    top: 100,
    left: 50
  },
  container3 : {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    position: 'absolute',
    top: 100,
    left: 50
  }
})