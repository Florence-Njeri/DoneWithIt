import React from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
function WelcomeScreen() {
  const bgImage = require('../assets/background.jpg');
  const logoImage = require('../assets/logo-red.png');
  return (
    <ImageBackground style={styles.bgImage} source={bgImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoImage} />
        <Text>Sell waht you don't need</Text>
      </View>

      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    width: '100%',
    height: 70,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center"
  },
  registerButton: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    height: 70,
  },
});
export default WelcomeScreen;
