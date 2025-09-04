import { Text, SafeAreaView, StyleSheet} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.para}>This is a sample text.</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})