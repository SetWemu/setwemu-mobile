import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrganizerProfileScreen from '../screens/OrganizerProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatConversationScreen from '../screens/ChatConversationScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import SplashScreen from '../screens/SplashScreen';
import AttendeesListScreen from '../screens/AttendeesListScreen';
import NewMessageScreen from '../screens/NewMessageScreen';
import ChatSettingsScreen from '../screens/ChatSettingsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="ChatSettings" 
      screenOptions={{ headerShown: false }}
    >           
      <Stack.Screen name="ChatSettings" component={ChatSettingsScreen} />
      <Stack.Screen name="NewMessage" component={NewMessageScreen} />
      <Stack.Screen name="AttendeesList" component={AttendeesListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={SplashScreen}  />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="OrganizerProfile" component={OrganizerProfileScreen}  />
      <Stack.Screen name="Profile" component={ProfileScreen}  />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="ChatConversation" component={ChatConversationScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;