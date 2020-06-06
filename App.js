import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedbackComponent,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };
  const {landscape} = useDeviceOrientation();
  const chairImage = require('./assets/chair.jpg');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          height: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex:1
        }}
      >
        <View
          style={{
            backgroundColor: '#fc5c65',
            height: 60,
            width: 50,
            margin: 16,
          }}
        />
        <View
          style={{
            backgroundColor: '#4ECDC4',
            height: 60,
            width: 50,
            margin: 16,
          }}
        />
      </View>
      <Image
        style={{
          flex: 5,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
        source={chairImage}
      />
       <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          height: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex:1
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
