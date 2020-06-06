import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function ViewImageScreen() {
  const chairImage = require('../assets/chair.jpg');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image style={styles.image} source={chairImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: '#fc5c65',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 50,
    left: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  deleteIcon: {
    backgroundColor: '#4ECDC4',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 50,
    right: 24,
  },
  image: {
    flex: 4.5,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flexDirection: 'column',
  },
});
export default ViewImageScreen;
