import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatSettingsScreen = ({ navigation }: any) => {
  // Mock data for the header
  const userData = {
    name: 'Kasun Perera',
    role: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=11',
    bio: 'Tech enthusiast and lead developer. Let’s connect and talk about React Native!',
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Info</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PART 2: Profile Section */}
        <View style={styles.profileSection}>
          <Image source={{ uri: userData.avatar }} style={styles.largeAvatar} />
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userRole}>{userData.role}</Text>
          <Text style={styles.userBio}>{userData.bio}</Text>
        </View>

        {/* Placeholder for Part 3 */}
        <View style={{ padding: 40, alignItems: 'center' }}>
          <Text style={{ color: '#475569' }}>Settings items will appear here...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#1E293B',
  },
  backButton: { padding: 5 },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  // PART 2 Styles: The modern "Hero" profile area
  profileSection: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#1E293B',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  largeAvatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4CC1D4' // Added a slight border to make it pop
  },
  userName: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  userRole: { color: '#4CC1D4', fontSize: 16, marginTop: 4 },
  userBio: { 
    color: '#94a3b8', 
    textAlign: 'center', 
    marginTop: 15, 
    lineHeight: 20,
    paddingHorizontal: 10 
  },
});

export default ChatSettingsScreen;