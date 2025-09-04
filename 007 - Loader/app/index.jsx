import { ActivityIndicator, Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <>
    <View style={styles.container}>
      <ActivityIndicator size="60" color="red"/>
      <Text style={styles.para}>This is an activity indicator/loader.</Text>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#92f9e6ff'
  },
  para : {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 600
  }
})