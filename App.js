import React, { useRef } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import * as ExpoPixi from 'expo-pixi';

const App = () => {
  LogBox.ignoreAllLogs();
  const sketch = useRef(null);
  return (
      <View style={styles.container}>
        <Text>Please write something below with your fingure</Text>
        <ExpoPixi.Signature
            ref={sketch}
            style={styles.sketch}
            strokeColor={'blue'}
            strokeWidth={8}
            strokeAlpha={1}
          />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sketch: {
    flex: 1,
    margin: 0,
    height: '100%',
    width: '100%',
    borderRadius: 4,
  }
});

export default App;