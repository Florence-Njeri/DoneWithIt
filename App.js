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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 24,
          fontStyle: 'normal',
          fontStyle: '600',
          color: 'tomato',
          textTransform: 'capitalize',
          textDecorationLine: 'underline',
          textAlign: 'justify',
          lineHeight: 40,
        }}
      >
        Coding with Florence. I love React Native!!
      </Text>
    </View>
  );
}
