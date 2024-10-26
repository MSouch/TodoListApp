// App.tsx
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim().length > 0) {
      setTasks([...tasks, taskText]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    marginHorizontal: 20,
  },
  task: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  }
});