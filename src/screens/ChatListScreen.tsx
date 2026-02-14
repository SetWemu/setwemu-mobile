import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const mockChats = [
  { id: '1', name: 'Sarah Wilson', message: 'Hey! Are you going to the tech meetup?', time: '10:30 AM', unread: 2, type: 'friend' },
  { id: '2', name: 'Event Organizers', message: 'Your ticket has been confirmed! 🎉', time: 'Yesterday', unread: 0, type: 'host' },
  { id: '3', name: 'David Chen', message: 'Can you send me the location?', time: 'Yesterday', unread: 0, type: 'friend' },
  { id: '4', name: 'Design Team', message: 'See you at the workshop tomorrow.', time: 'Tue', unread: 5, type: 'host' },
];

// 1. Added { navigation } to the props here so we can use it to change screens
const ChatListScreen = ({ navigation }: any) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredChats = mockChats.filter(chat => {
    if (activeFilter === 'Friends') return chat.type === 'friend';
    if (activeFilter === 'Hosts') return chat.type === 'host';
    return true; 
  });

  const toggleFilter = (filterName: string) => {
    if (activeFilter === filterName) {
      setActiveFilter(null); 
    } else {
      setActiveFilter(filterName); 
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    // 2. Added onPress here to navigate to the new screen and pass the person's name!
    <TouchableOpacity 
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatConversation', { name: item.name })}
    >
      <View style={styles.avatar} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage} numberOfLines={1}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.chatTime}>{item.time}</Text>
        {item.unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Messages</Text>
      
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search conversations..." 
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleButton, activeFilter === 'Friends' && styles.activeToggle]}
          onPress={() => toggleFilter('Friends')}
        >
          <Text style={[styles.toggleText, activeFilter === 'Friends' && styles.activeToggleText]}>Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.toggleButton, activeFilter === 'Hosts' && styles.activeToggle]}
          onPress={() => toggleFilter('Hosts')}
        >
          <Text style={[styles.toggleText, activeFilter === 'Hosts' && styles.activeToggleText]}>Hosts</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredChats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (Styles remain exactly the same as before, pasting them here for completeness)
  container: { flex: 1, backgroundColor: '#0B1221' },
  headerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 20, marginBottom: 15 },
  searchContainer: { paddingHorizontal: 20, marginBottom: 15 },
  searchInput: { backgroundColor: '#1E2536', color: 'white', borderRadius: 10, padding: 12, fontSize: 16 },
  toggleContainer: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 15, gap: 10 },
  toggleButton: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center', backgroundColor: '#1E2536' },
  activeToggle: { backgroundColor: '#2D8CFF' },
  toggleText: { color: '#888', fontWeight: '600', fontSize: 15 },
  activeToggleText: { color: 'white' },
  listContainer: { paddingHorizontal: 20 },
  chatItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#1E2536' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#4A5568', marginRight: 15 },
  chatDetails: { flex: 1, justifyContent: 'center' },
  chatName: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 4 },
  chatMessage: { color: '#888', fontSize: 14 },
  chatMeta: { alignItems: 'flex-end', justifyContent: 'center' },
  chatTime: { color: '#888', fontSize: 12, marginBottom: 6 },
  badge: { backgroundColor: '#2D8CFF', borderRadius: 12, minWidth: 24, height: 24, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  badgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});

export default ChatListScreen;