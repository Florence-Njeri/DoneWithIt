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
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };
  const {landscape} = useDeviceOrientation();
  const chairImage = require('./app/assets/chair.jpg');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          shadowColor: 'grey',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 20,
        }}
      ></View>
    </View>
  );
}
