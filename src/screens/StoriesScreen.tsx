import React from 'react';
import { View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';

// Getting device dimensions for a true full-screen experience
const { width, height } = Dimensions.get('window');

const StoriesScreen = ({ navigation }: any) => {
  const storyImage = 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&w=800&q=80';

  return (
    <View style={styles.container}>
      {/* Hiding the status bar (clock, battery) for total immersion */}
      <StatusBar hidden />
      
      {/* The background content */}
      <Image source={{ uri: storyImage }} style={styles.backgroundImage} />

      {/* A dark overlay so the white text we add later will be readable */}
      <View style={styles.overlay} />
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
});

export default StoriesScreen;