import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CreateAccountScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;