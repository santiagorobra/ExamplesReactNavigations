import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Routes from '../../constants/routes';
import ProfileStack from '../ProfileStack';
import HomeScreen from '../../screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.HomeTabs}>
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.ProfileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
