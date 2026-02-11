import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }: any) => {
  
  // Placeholder Data
  const user = {
    name: "Isafa Ahmed",
    handle: "@isafa_dev",
    avatar: "https://ui-avatars.com/api/?name=Isafa+Ahmed&background=38bdf8&color=fff&size=128",
    stats: {
      hosted: 12,
      attended: 45,
      favorites: 8,
      following: 120,
    }
  };

  const menuItems = [
    { icon: "images-outline", label: "My Posts", action: () => console.log("Posts") },
    { icon: "ticket-outline", label: "My Tickets", action: () => console.log("Tickets") },
    { icon: "heart-outline", label: "Favorite Events", action: () => console.log("Favorites") },
    { icon: "settings-outline", label: "Settings", action: () => console.log("Settings") },
    { icon: "help-circle-outline", label: "Help & Support", action: () => console.log("Help") },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      
      {/* 1. Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <TouchableOpacity style={styles.editBadge}>
            <Icon name="pencil" size={14} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.handle}>{user.handle}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 2. Stats Grid */}
        <View style={styles.statsContainer}>
          <StatItem label="Hosted" value={user.stats.hosted} />
          <StatItem label="Attended" value={user.stats.attended} />
          <StatItem label="Favorites" value={user.stats.favorites} />
          <StatItem label="Following" value={user.stats.following} />
        </View>

        {/* 3. Menu List */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={item.action}
            >
              <View style={styles.menuIconContainer}>
                <Icon name={item.icon} size={22} color="#94a3b8" />
              </View>
              <Text style={styles.menuText}>{item.label}</Text>
              <Icon name="chevron-forward" size={20} color="#334155" />
            </TouchableOpacity>
          ))}
        </View>

        {/* 4. Sign Out Button */}
        <TouchableOpacity 
          style={styles.signOutButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="log-out-outline" size={20} color="#ef4444" style={{marginRight: 10}} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={{height: 40}} /> 
      </ScrollView>
    </View>
  );
};

// Helper Component for Stats
const StatItem = ({ label, value }: { label: string, value: number }) => (
  <TouchableOpacity style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#1e293b',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#38bdf8',
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#0F172A',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  handle: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#1e293b',
    margin: 20,
    borderRadius: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#38bdf8',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 12,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  menuIconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(239, 68, 68, 0.1)', 
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  signOutText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;