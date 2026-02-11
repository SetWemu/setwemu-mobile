import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Placeholder User Data
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

  // Placeholder Posts Data (Just colors for now)
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // The Options Menu Items
  const menuItems = [
    { icon: "ticket-outline", label: "My Tickets", action: () => console.log("Tickets") },
    { icon: "heart-outline", label: "Favorite Events", action: () => console.log("Favorites") },
    { icon: "settings-outline", label: "Settings", action: () => console.log("Settings") },
    { icon: "help-circle-outline", label: "Help & Support", action: () => console.log("Help") },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      
      {/* 1. Header with Settings Button */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
            <View style={styles.avatarContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.editBadge}>
                <Icon name="pencil" size={12} color="#fff" />
            </TouchableOpacity>
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.handle}>{user.handle}</Text>
        </View>

        {/* Settings Icon (Top Right) */}
        <TouchableOpacity 
            style={styles.settingsIcon} 
            onPress={() => setMenuVisible(true)}
        >
            <Icon name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 2. Stats Grid (Unchanged) */}
        <View style={styles.statsContainer}>
          <StatItem label="Hosted" value={user.stats.hosted} />
          <StatItem label="Attended" value={user.stats.attended} />
          <StatItem label="Favorites" value={user.stats.favorites} />
          <StatItem label="Following" value={user.stats.following} />
        </View>

        {/* 3. NEW: Posts Grid Section */}
        <View style={styles.postsSection}>
            <Text style={styles.sectionTitle}>My Posts</Text>
            <View style={styles.postsGrid}>
                {posts.map((item, index) => (
                    <View key={index} style={styles.postItem}>
                        {/* Placeholder for an image */}
                        <Icon name="image-outline" size={30} color="#334155" />
                    </View>
                ))}
            </View>
        </View>

        <View style={{height: 40}} /> 
      </ScrollView>


      {/* 4. THE POP-UP MENU MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setMenuVisible(false)}
        >
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Menu</Text>
                    <TouchableOpacity onPress={() => setMenuVisible(false)}>
                        <Icon name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                
                {/* Menu Options */}
                {menuItems.map((item, index) => (
                    <TouchableOpacity 
                    key={index} 
                    style={styles.menuItem}
                    onPress={() => {
                        item.action();
                        setMenuVisible(false);
                    }}
                    >
                    <Icon name={item.icon} size={22} color="#94a3b8" style={styles.menuIcon} />
                    <Text style={styles.menuText}>{item.label}</Text>
                    <Icon name="chevron-forward" size={18} color="#334155" />
                    </TouchableOpacity>
                ))}

                {/* Sign Out (Distinct Style) */}
                <TouchableOpacity 
                    style={styles.signOutButton}
                    onPress={() => {
                        setMenuVisible(false);
                        navigation.navigate('Login');
                    }}
                >
                    <Icon name="log-out-outline" size={20} color="#ef4444" style={{marginRight: 10}} />
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </Modal>

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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
    position: 'relative',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 5,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#38bdf8',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#38bdf8',
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0F172A',
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  handle: {
    color: '#94a3b8',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1e293b',
    margin: 20,
    borderRadius: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 11,
  },
  // Posts Grid Styles
  postsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postItem: {
    width: (width - 50) / 3, // 3 items per row
    height: (width - 50) / 3,
    backgroundColor: '#1e293b',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1e293b',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: 300,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  menuIcon: {
    marginRight: 15,
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
    marginTop: 30,
    padding: 16,
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