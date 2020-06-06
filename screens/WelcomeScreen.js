import React from 'react';
function WelcomeScreen(){
return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <ImageBackground style={styles.bgImage} source={bgImage} />
      <View style={{  backgroundColor: '#fc5c65', flex: 0.3 }} />
      <View style={{ backgroundColor: "#4ECDC4", flex: 0.3 }} />
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
  bgImage: {
    flex: 3,
    width: '100%',
    height: '100%',
  }
});
export default WelcomeScreen;