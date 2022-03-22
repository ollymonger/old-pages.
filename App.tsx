import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ProgressBarAndroidBase, Animated } from 'react-native';
import { Provider } from 'react-redux';
import { ClientTab } from './src/clientTab';
import { store, useAppDispatch } from './src/redux/store';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import { useFonts, Inter_900Black, Inter_300Light } from '@expo-google-fonts/inter';
import { ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Home } from './src/components/apps/Home';

export const mobileimage = require('./desktop.png');


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Inter_300Light
  });

  let [fakeLoad, setFakeLoad] = React.useState(false);

  return (
    <NativeRouter>
      <Provider store={store}>
        <PaperProvider>
          <View style={styles.app}>
            {fakeLoad ?     
              <View style={{}}>
                  <ClientTab />
              </View> :
              <></>
            }
            <View>
              {fakeLoad ? (  
                <View style={styles.loadedContainer}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </View>
                ) : (
                <View style={styles.loadingContainer}>
                  <AnimatedCircularProgress
                    size={200}
                    width={10}
                    fill={100}
                    rotation={0}
                    duration={700}
                    tintColor="#B084CC"
                    backgroundColor="purple"
                    onAnimationComplete={() => setFakeLoad(true)}
                  >
                    {
                      (fill) => (                        
                        <Text style={styles.loadingText}>{
                          fill >= 95 ? 'LOADED'  : Math.round(fill) + '%'
                        }</Text>
                      )
                    }
                  </AnimatedCircularProgress>
                </View>
                )}
            </View>

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
  loadingContainer:{
    flex: 2,
    paddingLeft: '23vw',
    paddingTop: '25vh',
    paddingRight: '23vw',
    alignSelf: 'center',
  },
  loadingText:{
    fontFamily: 'Inter_900Black',
    fontSize: '2rem',
    color: '#B084CC'
  },
  loadedContainer: {
  }
});
