import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App () {
  let x = 1;
  console.log ('App executed');
  const handlePress = () => {
    console.log ('Text pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native!!! - A really really long text. Now I want to make this really long so it des not fit on one line on the screen. See!!
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
