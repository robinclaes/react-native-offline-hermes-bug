import React from 'react';
import {Text, View} from 'react-native';
import {useIsConnected} from 'react-native-offline';

export function Connected() {
  const isConnected = useIsConnected();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#eee',
      }}>
      {isConnected === null && <Text>isConnected is null</Text>}
      {isConnected === false && <Text>isConnected is false</Text>}
      {isConnected && <Text>isConnected is true</Text>}
    </View>
  );
}
