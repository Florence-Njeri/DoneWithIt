import React from 'react';
import {View} from 'react-native';

function ViewImageScreen() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <View style={{backgroundColor: '#fc5c65', flex: 0.3}} />
      <View style={{backgroundColor: '#4ECDC4', flex: 0.3}} />
    </View>
  );
}

export default ViewImageScreen;
