import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrganizerProfileScreen from '../screens/OrganizerProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatConversationScreen from '../screens/ChatConversationScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="OrganizerProfile" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OrganizerProfile" component={OrganizerProfileScreen}  />
      <Stack.Screen name="Profile" component={ProfileScreen}  />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="ChatConversation" component={ChatConversationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;