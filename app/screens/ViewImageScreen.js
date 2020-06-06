import React from 'react';
import {View} from 'react-native';

function ViewImageScreen() {
  const chairImage = require('./app/assets/chair.jpg');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#000',
          width: '100%',
          height: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
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
          flex: 4.5,
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
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
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
}

export default ViewImageScreen;
