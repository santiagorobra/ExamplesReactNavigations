import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './AppStyles';
import Navigator from './src/navigators';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
};

export default App;
