import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface ToDoListProps {
  tasks: string[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.taskItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;