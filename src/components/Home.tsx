import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../App";
import { clientState } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

const welcomeMsg = [{ lang: "en", text: "Welcome" }, { lang: "fr", text: "Bonjour" }, { lang: "es", text: "Bienvenido" }, { lang: "de", text: "Willkommen" },
{ lang: "it", text: "Benvenuto" }, { lang: "ja", text: "ようこそ" },
{ lang: "ko", text: "환영합니다" }, { lang: "zh", text: "欢迎" },
 { lang: "ru", text: "Добро пожаловать" }];

const WebHome = (client: clientState) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '400%' }}>{
        welcomeMsg.map(msg => { if(msg.lang === client.lang) { return msg.text }})}</Text>
        <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '100%', textAlign:'center' }}>
          This looks pretty cool... right?
        </Text>
    </View>
  );
};

const MobHome = (client: clientState) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '300%' }}>{
        welcomeMsg.map(msg => { if(msg.lang === client.lang) { return msg.text }})}</Text>
        <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '75%', textAlign:'center' }}>
          This looks pretty cool... right?
          </Text>
    </View>
  );
};

export const Home = () => {
    const dispatch = useAppDispatch();
    const client: clientState = useAppSelector(state => state.client);
    if(client.device == "mobile") return MobHome(client);
    else return WebHome(client);
}