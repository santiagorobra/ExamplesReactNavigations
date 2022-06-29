import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from '../../constants/routes';
import LoginScreen from '../../screens/Auth/LoginScreen';
import HomeTabs from '../HomeTabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
      <Stack.Screen name={Routes.HomeTabs} component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;
