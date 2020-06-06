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
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
