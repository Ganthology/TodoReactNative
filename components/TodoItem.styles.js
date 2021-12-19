import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width * 0.9,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  verticalContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  subtext: {
    color: 'grey',
    fontSize: 12,
  },
});

export default styles;
