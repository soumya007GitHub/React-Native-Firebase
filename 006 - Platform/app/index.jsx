import { Text, View, Platform, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
      {Platform.OS == 'android'? 'This is Android Phone': 'This is IOS Phone'}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Platform.OS == 'android'?'#f59fd6ff':'#9faff5ff'
  },
  heading: {
    fontSize: 40,
    fontWeight: '900'
  }
})