import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from '../../constants/routes';
import ProfileScreen from '../../screens/ProfileScreen';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Profile}>
      <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
      <Stack.Screen name={Routes.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
