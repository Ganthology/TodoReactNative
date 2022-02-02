import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodolistTabScreen from '../screens/TodolistTabScreen';
import AddItemScreen from '../screens/AddItemScreen';
import EditItemScreen from '../screens/EditItemScreen';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Todolist"
          component={TodolistTabScreen}
          options={{headerShown: false}}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name="Add Item"
          component={AddItemScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Edit Item"
          component={EditItemScreen}
          options={{headerShown: false}}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
