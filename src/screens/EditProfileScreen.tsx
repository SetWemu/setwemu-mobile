import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = ({ navigation }: any) => {
  // Dummy starting data - updated to match your profile screen!
  const [avatar, setAvatar] = useState('https://ui-avatars.com/api/?name=Isafa+Ahmed&background=38bdf8&color=fff&size=128');
  const [name, setName] = useState('Isafa Ahmed');
  const [username, setUsername] = useState('@isafa_dev');
  const [email, setEmail] = useState('isafa@example.com');
  const [phone, setPhone] = useState('+1 234 567 8900');
  const [location, setLocation] = useState('Colombo, Sri Lanka');
  const [bio, setBio] = useState('Tech enthusiast & Event Organizer. Always looking to learn new things!');
  const [website, setWebsite] = useState('https://isafa.dev');

  const handleSave = () => {
    // Here is where you'd eventually send data to your database
    console.log('Saved data:', { name, username, email, phone, location, bio, website });
    navigation.goBack(); // Return to the profile screen after saving
  };

  const handleChangePhoto = () => {
    // We will add the Image Picker logic here later!
    console.log('Change photo clicked');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* 1. Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Edit Profile</Text>
        
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        
        {/* 2. Profile Picture Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.cameraBadge} onPress={handleChangePhoto}>
              <Icon name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 3. Form Fields */}
        <View style={styles.formContainer}>
            
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholderTextColor="#64748b" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholderTextColor="#64748b" autoCapitalize="none" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholderTextColor="#64748b" keyboardType="email-address" autoCapitalize="none" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholderTextColor="#64748b" keyboardType="phone-pad" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholderTextColor="#64748b" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={bio}
              onChangeText={setBio}
              placeholderTextColor="#64748b"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Website / Portfolio</Text>
            <TextInput style={styles.input} value={website} onChangeText={setWebsite} placeholderTextColor="#64748b" keyboardType="url" autoCapitalize="none" />
          </View>

          <View style={{height: 40}} />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Synced with your ProfileScreen
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  cancelButton: {
    color: '#94a3b8',
    fontSize: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    color: '#38bdf8', // Synced with your ProfileScreen accent color
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#38bdf8',
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#38bdf8',
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#0F172A',
  },
  formContainer: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#94a3b8',
    marginBottom: 8,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#1e293b', // Lighter surface color
    color: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default EditProfileScreen;