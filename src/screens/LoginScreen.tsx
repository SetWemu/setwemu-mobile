import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';

const LoginScreen = () => {
  // These variables store what the user types
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      
      {/* 1. Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoTop}>SW</Text>
        <Text style={styles.logoBottom}>SETWEMU</Text>
      </View>

      {/* 2. Form Section */}
      <View style={styles.formContainer}>
        
        {/* Username/Email Input */}
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#6b7280"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#6b7280"
            secureTextEntry={true} // Hides the text
            value={password}
            onChangeText={setPassword}
          />
          {/* Simple text Eye icon for now */}
          <Text style={styles.eyeIcon}>👁️</Text>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.optionsRow}>
          <View style={styles.rememberMeContainer}>
             {/* Simple square for checkbox */}
            <View style={styles.checkbox} /> 
            <Text style={styles.optionText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117', // Dark background
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 40,
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
  formContainer: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 16,
    position: 'relative', // Needed to place the eye icon inside
  },
  input: {
    backgroundColor: '#161b22', // Slightly lighter dark for input bg
    borderWidth: 1,
    borderColor: '#30363d', // Subtle border
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: 'white',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    color: '#888',
    fontSize: 18,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#58a6ff',
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: '#1f6feb', // Blue square to simulate checked
  },
  optionText: {
    color: '#c9d1d9',
    fontSize: 14,
  }
});

export default LoginScreen;