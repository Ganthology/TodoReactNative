import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import TodolistScreen from './TodolistScreen';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import realm from '../Realm/realm';

const FirstRoute = () => <TodolistScreen status={'Pending'} />;

const SecondRoute = () => <TodolistScreen status={'Completed'} />;

const ThirdRoute = () => <TodolistScreen status={'Overdue'} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const TodolistTabScreen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Pending'},
    {key: 'second', title: 'Completed'},
    {key: 'third', title: 'Overdue'},
  ]);

  const deleteItemHandler = () => {
    const todolistData = realm.objects('TodoItem');

    const selectedItems = todolistData.filtered('isSelected == true');

    selectedItems.forEach(selectedItem => {
      realm.write(() => {
        realm.delete(selectedItem);
      });
    });
  };

  const completeItemHandler = () => {
    const todolistData = realm.objects('TodoItem');

    const selectedItems = todolistData.filtered('isSelected == true');

    selectedItems.forEach(selectedItem => {
      realm.write(() => {
        selectedItem.status = 'Completed';
      });
    });
  };

  const resetSelectedItems = () => {
    const todolistData = realm.objects('TodoItem');

    const selectedItems = todolistData.filtered('isSelected == true');

    selectedItems.forEach(selectedItem => {
      realm.write(() => {
        selectedItem.isSelected = false;
      });
    });
  };

  useEffect(() => {
    resetSelectedItems();
  }, [index]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: index == 0 ? 'blue' : index == 1 ? 'green' : 'red',
      }}
      style={{
        backgroundColor: '#e9ecef',
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            focused ? styles.TabBarHeaderFocused : styles.TabBarHeaderNormal,
            styles.TabBarHeader,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Todolist</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
      <ActionButton buttonColor="black">
        <ActionButton.Item
          buttonColor="darkgrey"
          title="New"
          onPress={() => {
            navigation.navigate('Add Item');
          }}>
          <Icon name="add-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Edit"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="create-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Delete"
          onPress={deleteItemHandler}>
          <Icon name="trash-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Complete"
          onPress={completeItemHandler}>
          <Icon name="checkmark-done-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </>
  );
};

export default TodolistTabScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingTop: '15%',
    paddingLeft: '5%',
    textAlign: 'left',
  },
  TabBarHeaderNormal: {
    color: 'grey',
    fontSize: 18,
  },
  TabBarHeaderFocused: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  TabBarHeader: {
    paddingBottom: '5%',
    width: Dimensions.get('window').width / 3,
    textAlign: 'center',
  },
  actionButtonIcon: {
    fontSize: 22,
    height: 22,
    color: 'white',
  },
});