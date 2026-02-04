import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <LinearGradient
      // Deep Navy to Black gradient to match your screenshot
      colors={['#0f172a', '#020617', '#000000']} 
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* Logo Section - Matching SET (White) WEMU (Cyan) */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoTextMain}>SET</Text>
            <Text style={styles.logoTextAccent}>WEMU</Text>
          </View>

          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Login</Text>
            <Text style={styles.headerSubtitle}>Welcome back, you've been missed!</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.formContainer}>
            
            {/* Username */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Username or Email"
                placeholderTextColor="#94a3b8" // Slate grey placeholder
                value={username}
                onChangeText={setUsername}
              />
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeIcon}
              >
                <Icon 
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#94a3b8" 
                />
              </TouchableOpacity>
            </View>

            {/* Remember Me & Forgot Password Row */}
            <View style={styles.optionsRow}>
                <TouchableOpacity 
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
                >
                <Icon 
                    name={rememberMe ? "checkbox" : "square-outline"} 
                    size={20} 
                    color={rememberMe ? "#38bdf8" : "#94a3b8"} 
                />
                <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button - Solid Slate Style */}
            <TouchableOpacity style={styles.loginButton}>
               <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          {/* Social Login Section */}
          <View style={styles.socialContainer}>
            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.orText}>Or Login with</Text>
                <View style={styles.dividerLine} />
            </View>
            
            <View style={styles.socialIcons}>
               {/* Google */}
               <TouchableOpacity style={styles.socialButton}>
                  <Icon name="logo-google" size={24} color="#fff" />
               </TouchableOpacity>
               {/* Facebook */}
               <TouchableOpacity style={styles.socialButton}>
                  <Icon name="logo-facebook" size={24} color="#fff" />
               </TouchableOpacity>
               {/* Apple */}
               <TouchableOpacity style={styles.socialButton}>
                  <Icon name="logo-apple" size={24} color="#fff" />
               </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
               <Text style={styles.linkText}>Signup</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 80,
    justifyContent: 'center',
    minHeight: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logoTextMain: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 2,
  },
  logoTextAccent: {
    fontSize: 32,
    fontWeight: '900',
    color: '#38bdf8', // Cyan color from your screenshot
    letterSpacing: 2,
  },
  headerContainer: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  formContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 16,
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#334155', // The slate border from your screenshot
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#fff',
    paddingRight: 50, // Space for eye icon
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
  },
  optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#94a3b8',
    marginLeft: 10,
    fontSize: 14,
  },
  forgotPasswordText: {
      color: '#38bdf8',
      fontWeight: '600',
      fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#334155', // Muted slate button color
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
      marginBottom: 30,
  },
  dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 10,
  },
  dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#334155',
  },
  orText: {
      color: '#94a3b8',
      marginHorizontal: 10,
      fontSize: 12,
  },
  socialIcons: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
  },
  socialButton: {
      width: 50,
      height: 50,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#334155',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    color: '#94a3b8',
  },
  linkText: {
    color: '#38bdf8',
    fontWeight: 'bold',
  },
});

export default LoginScreen;