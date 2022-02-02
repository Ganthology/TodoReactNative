import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Realm from 'realm';
import uuid from 'react-native-uuid';
import realm from '../Realm/realm';

const {width, height} = Dimensions.get('window');

const AddItemScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  let task1;

  return (
    <View>
      <View style={styles.spaceBetweenContainer}>
        {/* Container for Header, Title, Description, Deadline */}
        <View style={styles.container}>
          {/* Horizontal container for Title and Close button */}
          <View style={styles.horizontalContainer}>
            {/* Title */}
            <Text style={styles.header}>Add Item</Text>

            {/* Close Button */}
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="close-outline" style={styles.closeButton} />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.descriptionLabel}>Title Input</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setTitle}
            value={title}
            placeholder="Enter the title here"
          />

          {/* Description */}
          <Text style={styles.descriptionLabel}>Description Input</Text>
          <TextInput
            multiline
            style={styles.textField}
            maxLength={200}
            onChangeText={setDescription}
            value={description}
            placeholder="Enter the description here"
          />

          {/* Deadline Picker */}
          <Text style={styles.descriptionLabel}>Deadline Picker</Text>

          {/* <View style={styles.datepickerContainer}> */}
          <View style={styles.textInputWithLogoContainer}>
            <TextInput
              editable={false}
              onPressIn={() => setOpen(true)}
              // pointerEvents={"none"}
              style={styles.textInputWithLogo}
              value={moment(date).format('DD MMM YYYY')}
            />
            <Icon name="calendar" style={styles.closeButton} />
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            // onDateChange={setDate}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            // style={styles.datepicker}
          />
          {/* </View> */}

          {/* Status Picker */}
          <Text style={styles.descriptionLabel}>Status</Text>
          <View style={styles.pillContainer}>
            <TouchableOpacity
              style={
                status === 'Pending'
                  ? styles.pickedStatusPill
                  : styles.unpickedStatusPill
              }
              onPress={() => setStatus('Pending')}>
              <Text
                style={
                  status === 'Pending'
                    ? styles.pickedStatusPillLabel
                    : styles.unpickedStatusPillLabel
                }>
                Pending
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                status === 'Completed'
                  ? styles.pickedStatusPill
                  : styles.unpickedStatusPill
              }
              onPress={() => setStatus('Completed')}>
              <Text
                style={
                  status === 'Completed'
                    ? styles.pickedStatusPillLabel
                    : styles.unpickedStatusPillLabel
                }>
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                status === 'Overdue'
                  ? styles.pickedStatusPill
                  : styles.unpickedStatusPill
              }
              onPress={() => setStatus('Overdue')}>
              <Text
                style={
                  status === 'Overdue'
                    ? styles.pickedStatusPillLabel
                    : styles.unpickedStatusPillLabel
                }>
                Overdue
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Container for Button group */}
        <View style={styles.buttonGroupContainer}>
          {/* Confirm Button */}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.confirmContainer]}
            onPress={() => {
              realm.write(() => {
                task1 = realm.create('TodoItem', {
                  _id: uuid.v4(),
                  title: title,
                  description: description,
                  deadline: moment(date).format('DD MMM YYYY'),
                  status: status,
                  isSelected: false,
                });
              });
              navigation.goBack();
            }}>
            <Text style={styles.buttonLabel}>Confirm</Text>
          </TouchableOpacity>
          {/* Delete Button */}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.deleteContainer]}>
            <Text style={styles.buttonLabel}>Delete</Text>
          </TouchableOpacity>
          {/* Cancel Button */}
          <TouchableOpacity
            style={[styles.buttonContainer, styles.cancelContainer]}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonLabel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({
  spaceBetweenContainer: {
    justifyContent: 'space-between',
    height: height,
    // backgroundColor: 'red',
    paddingBottom: '10%',
    backgroundColor: '#e9ecef',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: '2.5%',
  },
  container: {
    marginHorizontal: '5%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '15%',
  },
  closeButton: {
    fontSize: 30,
  },
  textInput: {
    // backgroundColor: 'white',
    // borderRadius: 5,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    paddingVertical: 8,
  },
  textField: {
    // backgroundColor: 'white',
    // borderRadius: 5,
    borderBottomWidth: 2,
    // height: 150,
    paddingLeft: 10,
    paddingBottom: 8,
    fontSize: 14,
    maxHeight: height * 0.2,
  },
  textInputWithLogo: {
    // borderBottomWidth: 2,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  textInputWithLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
  },
  datepicker: {
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  datepickerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    // width: width,
  },
  pickedStatusPill: {
    borderWidth: 2,
    borderRadius: height * 0.02,
    width: width * 0.28,
    height: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  pickedStatusPillLabel: {
    color: 'white',
  },
  unpickedStatusPill: {
    borderWidth: 2,
    borderRadius: height * 0.02,
    width: width * 0.28,
    height: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  unpickedStatusPillLabel: {
    color: 'black',
  },
  pillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonGroupContainer: {
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: '2.5%',
    // paddingTop: '1%',
    // height: height*0.1,
    // marginTop: "2%",
  },
  buttonContainer: {
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    width: width * 0.9,
    height: height * 0.06,
    borderRadius: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  confirmContainer: {
    // backgroundColor: '#2a9d8f',
    backgroundColor: 'black',
  },
  deleteContainer: {
    // backgroundColor: '#f72585',
    backgroundColor: '#495057',
  },
  cancelContainer: {
    backgroundColor: 'darkgrey',
  },
});
