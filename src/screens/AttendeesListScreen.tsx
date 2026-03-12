import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Dummy data so the list isn't empty!
const attendees = [
  { id: '1', name: 'Kasun Perera', role: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: '2', name: 'Nethmi Fernando', role: 'UX Designer', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: '3', name: 'Ruwan Silva', role: 'Event Organizer', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: '4', name: 'Amandi De Silva', role: 'Tech Enthusiast', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '5', name: 'Chamith Jayaweera', role: 'Student', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '6', name: 'Sarah Jones', role: 'Marketing Manager', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '7', name: 'David Smith', role: 'Data Scientist', avatar: 'https://i.pravatar.cc/150?img=3' },
];

const AttendeesListScreen = ({ navigation }: any) => {
  
  // This function tells the FlatList how to draw ONE single row
  const renderItem = ({ item }: any) => (
    <View style={styles.userCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userRole}>{item.role}</Text>
      </View>
      
      {/* A quick way to message them directly from the list */}
      <TouchableOpacity style={styles.messageBtn}>
        <Icon name="chatbubble-ellipses-outline" size={20} color="#4CC1D4" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attendees ({attendees.length})</Text>
        <View style={{ width: 24 }} /> {/* Invisible spacer to keep the title perfectly centered */}
      </View>

      {/* The Scrollable List */}
      <FlatList
        data={attendees}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  listContainer: { padding: 20 },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  userInfo: { flex: 1 },
  userName: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  userRole: { color: '#94a3b8', fontSize: 14, marginTop: 2 },
  messageBtn: {
    padding: 10,
    backgroundColor: 'rgba(76, 193, 212, 0.1)',
    borderRadius: 20,
  },
});

export default AttendeesListScreen;