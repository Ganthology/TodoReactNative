import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import TodoItem from '../components/TodoItem';
import realm from '../Realm/realm';

const TodolistScreen = ({status, extraData}) => {
  const todolistData = realm.objects('TodoItem');

  const filteredData = todolistData.filtered(`status == '${status}'`);

  const [itemList, setItemList] = useState(filteredData);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={filteredData}
        extraData={extraData}
        renderItem={({item}) => {
          return (
            <TodoItem
              id={item._id}
              title={item.title}
              deadline={item.deadline}
              isSelected={item.isSelected}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TodolistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
  },
});
