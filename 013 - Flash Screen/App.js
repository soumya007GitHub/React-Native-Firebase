import { StyleSheet, Image, SafeAreaView } from 'react-native';
import {scale} from 'react-native-size-matters';
import Logo from './components/Logo';
import Ellipse from './components/Ellipse';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={styles.logo}/>
      <Ellipse style={styles.ellipse}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(130),
    height: scale(60)
  },
  ellipse: {
    position: 'absolute',
    width: scale(130),
    height: scale(60),
    bottom: 0,
    right: 0,
  }
});
