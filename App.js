import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
