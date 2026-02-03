import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView // Added ScrollView in case screens are small
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 1. Logo Section */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoTop}>SW</Text>
          <Text style={styles.logoBottom}>SETWEMU</Text>
        </View>

        {/* 2. Form Section */}
        <View style={styles.formContainer}>
          
          {/* Username Input */}
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
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Text style={styles.eyeIcon}>👁️</Text>
          </View>

          {/* Remember Me */}
          <View style={styles.optionsRow}>
            <View style={styles.rememberMeContainer}>
              <View style={styles.checkbox} /> 
              <Text style={styles.optionText}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.optionText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* --- PHASE 3 STARTS HERE --- */}

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>

          {/* Social Icons */}
          <View style={styles.socialRow}>
            {/* Google */}
            <TouchableOpacity style={[styles.socialCircle, { backgroundColor: '#DB4437' }]}>
              <Text style={styles.socialText}>G</Text>
            </TouchableOpacity>
            {/* Facebook */}
            <TouchableOpacity style={[styles.socialCircle, { backgroundColor: '#4267B2' }]}>
              <Text style={styles.socialText}>f</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account? <Text style={styles.linkText}>Signup</Text>
            </Text>
            
            <View style={styles.footerLinks}>
              <TouchableOpacity><Text style={styles.smallLink}>Terms & Conditions</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.smallLink}>Support</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.smallLink}>Customer Care</Text></TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
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
    position: 'relative',
  },
  input: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#30363d',
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
    backgroundColor: '#1f6feb',
  },
  optionText: {
    color: '#c9d1d9',
    fontSize: 14,
  },
  // --- NEW STYLES ---
  loginButton: {
    marginTop: 30,
    backgroundColor: '#5865F2', // The specific "Eventura" purple-blue
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#5865F2',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#30363d',
  },
  orText: {
    color: '#8b949e',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },
  socialCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#c9d1d9',
    marginBottom: 25,
  },
  linkText: {
    color: '#58a6ff',
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  smallLink: {
    color: '#8b949e',
    fontSize: 12,
  }
});

export default LoginScreen;