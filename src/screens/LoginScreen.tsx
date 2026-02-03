import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar,
  SafeAreaView 
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      
      {/* 1. Logo Section */}
      <View style={styles.logoContainer}>
        {/* You can replace this Text with an <Image /> later if you have a logo file */}
        <Text style={styles.logoTop}>SW</Text>
        <Text style={styles.logoBottom}>SETWEMU</Text>
      </View>

      {/* Placeholder for the rest (we will add inputs next) */}
      <View style={styles.tempPlaceholder}>
        <Text style={{color: '#888'}}>Inputs go here...</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117', // Dark Navy/Black background
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 50,
  },
  logoTop: {
    fontSize: 50,
    fontWeight: '900',
    color: 'white',
    letterSpacing: 2,
  },
  logoBottom: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    letterSpacing: 4,
    marginTop: -5,
  },
  tempPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
    borderRadius: 10,
  }
});

export default LoginScreen;