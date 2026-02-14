import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// 1. Import your screens
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatListScreen from '../screens/ChatListScreen'; // <--- NEW IMPORT

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* 2. Set 'Chat' as the starting screen for now */}
      <Stack.Navigator 
        initialRouteName="Chat" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        {/* 3. Add the new screen to the list */}
        <Stack.Screen name="Chat" component={ChatListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;