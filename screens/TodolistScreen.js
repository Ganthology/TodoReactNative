import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import TodoItem from '../components/TodoItem';
import realm from '../Realm/realm';

const TodolistScreen = ({status}) => {
  // const realm = await Realm.open({
  //   path: "myrealm",
  //   schema: [TodoItemSchema],
  // });

  const todolistData = realm.objects('TodoItem');

  // const filteredData = todolistData.filter(item => item.status === status);

  const filteredData = todolistData.filtered(`status == '${status}'`);

  const [itemList, setItemList] = useState(filteredData);

  // useEffect(() => {
  //   setItemList(filteredData);
  // }, [filteredData]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
      }}>
      <FlatList
        keyExtractor={item => item.id}
        data={filteredData}
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