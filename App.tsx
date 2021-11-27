import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ProgressBarAndroidBase, Animated } from 'react-native';
import { Provider } from 'react-redux';
import { ClientTab } from './src/clientTab';
import { store, useAppDispatch } from './src/redux/store';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import { useFonts, Inter_900Black, Inter_300Light } from '@expo-google-fonts/inter';
import { ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import AnimatedProgressWheel from 'react-native-progress-wheel';

import { Home } from './src/components/Home';
import { setClient, setLanguage } from './src/redux/clientReducer';

export const mobileimage = require('./desktop.png');


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Inter_300Light
  });

  let [fakeLoad, setFakeLoad] = React.useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setFakeLoad(true);
      }, 1000);
    }
  }, [fontsLoaded]);

  return (
    <NativeRouter>
      <Provider store={store}>
        <PaperProvider>
          <View style={styles.app}>
            {fakeLoad ? (
              <>
                <View style={{}}>
                  <ClientTab />
                </View>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                </Routes>
              </>
            ) : (
              <View style={styles.container}>
                <AnimatedProgressWheel
                  size={300}
                  width={20}
                  progress={100}
                  animateFromValue={0}
                  duration={1000}
                  backgroundColor={'purple'}
                  color={'blue'}
                />
                <Text style={styles.headerTextColor}>Loading site...</Text>
              </View>
            )}
          </View>
        </PaperProvider>
      </Provider>
    </NativeRouter>
  );
}

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#340580',
    color: '#fff',
    height: '100%'
  },
  header: {
    flex: 2,
    maxHeight: '7%',
    paddingLeft: '5%',
    paddingTop: '2%',
    paddingRight: '5%',
  },
  headerTextColor: {
    color: '#F7F7FF',
    fontFamily: 'Inter_900Black'
  },
  navLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: '#F7F7FF'
  },
  navRight: {
    bottom: '20px',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: '#F7F7FF'
  },
  container: {
    flex: 2,
    paddingLeft: '10%',
    paddingTop: '5%',
    paddingRight: '10%',
    alignSelf: 'center'
  }
});
