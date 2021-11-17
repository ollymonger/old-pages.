import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { setClient } from './src/clientReducer';
import { ClientTab } from './src/clientTab';
import { store, useAppDispatch, useAppSelector } from './src/store';



export default function App() {


  return (
    <Provider store={store}>
      <View style={styles.header}>
        <ClientTab />
      </View>
    </Provider>
  );
}

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    maxHeight: '7%'
  }
});
