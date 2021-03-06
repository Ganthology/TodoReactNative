import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './TodoItem.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import realm from '../Realm/realm';

const TodoItem = props => {
  // props: title, deadline
  // data: [{title: , deadline: }, {}]
  const todolistData = realm.objects('TodoItem');

  const item = todolistData.filtered(`_id == '${props.id}'`);

  const [isSelected, setIsSelected] = useState(item.isSelected);

  useEffect(() => {
    setIsSelected(item[0].isSelected);
  }, [item[0].isSelected]);

  const selectedHandler = () => {
    setIsSelected(prevState => {
      item.forEach(selectedItem => {
        realm.write(() => {
          selectedItem.isSelected = !prevState;
        });
      });

      return !prevState;
    });
  };

  return (
    // <View style={styles.container}>
    <TouchableOpacity
      style={styles.container}
      onLongPress={selectedHandler}
      onPress={() => console.log(item, isSelected)}>
      <View style={styles.verticalContainer}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.subtext}>Deadline: {props.deadline}</Text>
      </View>
      {isSelected && <Icon name="check-circle" size={25} color={'#495057'} />}
    </TouchableOpacity>
    // </View>
  );
};

export default TodoItem;
