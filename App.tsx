import 'react-native-gesture-handler'; 
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    // Adding flex: 1 here forces the container to take up the whole screen
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;