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
} from 'react-native';

export default function App () {
  const handlePress = () => {
    console.log ('Text pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native!!!
      </Text>
      <TouchableHighlight onPress={() => console.log ('Image tapped!!')}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
