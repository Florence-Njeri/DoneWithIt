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
      <Button
        style={{margin: 16}}
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert ('My Title', 'My message', [
            {text: 'Yes', onPress: () => console.log ('Yes')},
            {text: 'No', onPress: () => console.log ('No')},
          ])}
      />

      <Button
        style={{margin: 16}}
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt ('My title', 'My message', text => console.log (text))}
      />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
