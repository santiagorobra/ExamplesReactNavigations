import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../../constants/routes';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';

const ROUTE_NAME = Routes.HomeTabs;

function LoginScreen() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(ROUTE_NAME as never);
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <CustomButton
        title={`Navegar a ${ROUTE_NAME}`}
        onPress={handleNavigate}
      />
    </View>
  );
}

export default LoginScreen;
