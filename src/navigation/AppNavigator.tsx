import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // <-- We need this import!
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from '../screens/ChatListScreen';
import ChatConversationScreen from '../screens/ChatConversationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // We wrap the whole stack in the NavigationContainer
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="ChatConversation" component={ChatConversationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;