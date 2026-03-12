import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const StoriesScreen = ({ navigation }: any) => {
  const storyData = {
    username: 'Amandi De Silva',
    avatar: 'https://i.pravatar.cc/150?img=9',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=800&q=80',
    time: '2h ago',
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={{ uri: storyData.image }} style={styles.backgroundImage} />
      <View style={styles.overlay} />

      {/* NEW: Progress Bar Segments */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarActive} />
        <View style={styles.progressBarInactive} />
        <View style={styles.progressBarInactive} />
      </View>

      {/* NEW: Top Header (Avatar, Name, Close button) */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: storyData.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{storyData.username}</Text>
            <Text style={styles.timeText}>{storyData.time}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Icon name="close" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)', 
  },
  // Header & Progress Styles
  progressContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15, // Pushed slightly down from the very top
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 20,
  },
  progressBarActive: {
    flex: 1,
    height: 2.5,
    backgroundColor: '#fff',
    marginHorizontal: 2,
    borderRadius: 2,
  },
  progressBarInactive: {
    flex: 1,
    height: 2.5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 2,
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { 
    width: 36, 
    height: 36, 
    borderRadius: 18, 
    marginRight: 10, 
    borderWidth: 1.5, 
    borderColor: '#4CC1D4' 
  },
  username: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  timeText: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  closeBtn: { padding: 5 },
});

export default StoriesScreen;