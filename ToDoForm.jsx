// ToDoForm.jsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>ADD TASK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2196F3', // This is the blue color matching your screenshot
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default ToDoForm;