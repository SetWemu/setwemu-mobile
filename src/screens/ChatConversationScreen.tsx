import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  StatusBar
} from 'react-native';

const initialMessages = [
  { id: '1', text: 'Hey! Are you going to the tech meetup?', sender: 'them', time: '10:30 AM' },
  { id: '2', text: 'Yes! I just got my ticket.', sender: 'me', time: '10:32 AM' },
  { id: '3', text: 'Awesome, do you want to grab coffee before?', sender: 'them', time: '10:33 AM' },
];

const ChatConversationScreen = ({ navigation, route }: any) => {
  const chatName = route?.params?.name || 'Sarah Wilson';
  
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'me',
        time: 'Now', 
      };
      setMessages([...messages, newMessage]);
      setInputText(''); 
    }
  };

  const renderMessage = ({ item }: { item: any }) => {
    const isMe = item.sender === 'me';
    return (
      <View style={[styles.messageRow, isMe ? styles.messageRowMe : styles.messageRowThem]}>
        <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleThem]}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>{"< Back"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{chatName}</Text>
          <View style={styles.headerRight} /> 
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.chatList}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            placeholderTextColor="#888"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1221', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1E2536',
  },
  backButton: {
    paddingVertical: 5,
    paddingRight: 15,
  },
  backText: {
    color: '#2D8CFF',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    width: 50, 
  },
  chatList: {
    padding: 20,
    gap: 15, 
  },
  messageRow: {
    width: '100%',
    marginBottom: 5,
  },
  messageRowMe: {
    alignItems: 'flex-end', 
  },
  messageRowThem: {
    alignItems: 'flex-start', 
  },
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 4,
  },
  bubbleMe: {
    backgroundColor: '#2D8CFF', 
    borderBottomRightRadius: 4, 
  },
  bubbleThem: {
    backgroundColor: '#1E2536', 
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
  },
  timeText: {
    color: '#888',
    fontSize: 11,
    marginHorizontal: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 20,
    backgroundColor: '#0B1221',
    borderTopWidth: 1,
    borderTopColor: '#1E2536',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1E2536',
    color: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100, 
  },
  sendButton: {
    marginLeft: 15,
    backgroundColor: '#2D8CFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatConversationScreen;