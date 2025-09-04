import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>Responsiveness can be achieved by using Dimensions, percentage and library such as react-native-size-matters</Text>
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
  }
})