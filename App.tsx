import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { clientState, getClient, getLanguage, setClient } from './src/clientReducer';
import { ClientTab } from './src/clientTab';
import { store, useAppDispatch, useAppSelector } from './src/store';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Provider as PaperProvider } from 'react-native-paper';

const welcomeMsg: {} = [{ lang: "english", text: "Welcome" }, { lang: "french", text: "Bonjour" }, { lang: "spanish", text: "Bienvenido" }, { lang: "german", text: "Willkommen" },
{ lang: "italian", text: "Benvenuto" }, { lang: "japanese", text: "ようこそ" }, { lang: "korean", text: "환영합니다" }, { lang: "chinese", text: "欢迎" }, { lang: "russian", text: "Добро пожаловать" }];

const WebHome = (client) => {
  console.log(client);
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '400%' }}>{
        client.lang === "english" ? welcomeMsg[0].text : 'not english!'
      }</Text>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black
  });
  return (
    <NativeRouter>
      <Provider store={store}>
        <PaperProvider>
          <View style={styles.app}>
            <View style={styles.header}>
              <ClientTab />
            </View>
            <Routes>
              <Route exact path="/" element={
                WebHome("english")
              } />
            </Routes>
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
    paddingTop: '10%',
    paddingRight: '10%',
    alignSelf: 'center'
  }
});
