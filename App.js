import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigation/RootStackNavigator';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <RootStackNavigator />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
