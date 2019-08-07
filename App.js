import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles2.container}>React Native Test App!</Text>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#ffffff',
    backgroundColor: '#05CCAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  container: {
    color: '#ffffff',
  },
});
