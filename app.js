import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Fantasia Free ✨</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="اكتبي رسالتك"
        style={{ borderWidth: 1, marginTop: 20, padding: 10 }}
      />
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
