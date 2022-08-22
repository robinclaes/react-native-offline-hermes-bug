/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NetworkProvider} from 'react-native-offline';
import {Connected} from './Connected';

const App = () => {
  return (
    <NetworkProvider>
      <Connected />
    </NetworkProvider>
  );
};

export default App;
