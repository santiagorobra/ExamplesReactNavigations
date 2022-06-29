import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../constants/routes';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const ROUTE_NAME = Routes.Detail;

function ProfileScreen() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(ROUTE_NAME as never);
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <CustomButton
        title={`Navegar a ${ROUTE_NAME}`}
        onPress={handleNavigate}
      />
    </View>
  );
}

export default ProfileScreen;
