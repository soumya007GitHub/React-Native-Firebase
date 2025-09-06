import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import Header from './components/Header';
import { scale, verticalScale } from 'react-native-size-matters';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SocialCard from './components/SocialCard';

const data = [
  {
    id: 1,
    icon: <FontAwesome name="whatsapp" size={scale(25)} color="#178AD9" />,
    name: 'WhatsApp'
  },
  {
    id: 2,
    icon: <FontAwesome6 name="x-twitter" size={scale(25)} color="#178AD9" />,
    name: 'X'
  },
  {
    id: 3,
    icon: <FontAwesome name="instagram" size={scale(25)} color="#178AD9" />,
    name: 'Instagram'
  },
  {
    id: 4,
    icon: <FontAwesome name="snapchat-ghost" size={scale(25)} color="#178AD9" />,
    name: 'Snapchat'
  },
  {
    id: 5,
    icon: <FontAwesome5 name="tiktok" size={scale(25)} color="#178AD9" />,
    name: 'Tiktok'
  }
];

export default function Contact() {
  const [isActive, setIsActive] = useState('Live');
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headingText}>Contact Us</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, {backgroundColor: isActive === 'Live' ? '#75563B' : '#fff'}]} onPress={()=>setIsActive('Live')}>
          <Text style={[styles.buttonText, {color: isActive === 'Live' ? '#fff' : '#000'}]}>Live</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: isActive === 'Recorded' ? '#75563B' : '#fff'}]} onPress={()=>setIsActive('Recorded')}>
          <Text style={[styles.buttonText, {color: isActive === 'Recorded' ? '#fff' : '#000'}]}>Recorded</Text>
        </Pressable>
      </View>

      <View style={styles.socialContainer}>
        <Text style={styles.socialHeading}>Social Media Platforms</Text>
        {data.map((item) => {
          return (
            <SocialCard id={item.id} icon={item.icon} name={item.name} key={item.id} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: verticalScale(50),
    paddingHorizontal: scale(20)
  },
  headingText: {
    fontSize: scale(28),
    fontWeight: 'bold',
    marginVertical: verticalScale(20),
    letterSpacing: 1
  },
  socialContainer: {
    backgroundColor: '#eeeeeeff',
    padding: scale(10),
    borderRadius: scale(10)
  },
  socialHeading: {
    fontWeight: 'bold',
    marginTop: scale(5),
    marginBottom: scale(20)
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizantal: scale(10),
    paddingVertical: scale(15),
    gap: 2
  },
  button: {
    width: (Dimensions.get('screen').width - 45) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(10),
    borderRadius: scale(10)
  },
  buttonText: {
    textAlign: 'center',
  }
});
