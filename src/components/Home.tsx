import React, { useEffect, useRef } from "react";
import { View, Text, Animated, SafeAreaView } from "react-native";
import App, { styles } from "../../App";
import { clientState } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

const welcomeMsg = [{ lang: "en", text: "Hi, I'm Olly!" }, { lang: "es", text: "Hola, soy Olly!" }, { lang: "fr", text: "Bonjour, je suis Olly!" }, { lang: "de", text: "Hallo, ich bin Olly!" },
{ lang: "it", text: "Ciao, sono Olly!" }, { lang: "ru", text: "Привет, я Olly!" }, { lang: "zh", text: "你好，我是Olly!" }, { lang: "ja", text: "こんにちは、私はOllyです!" }];

const developerMessage = [{ lang: "en", text: "A passionate developer creating lots of apps using React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "es", text: "Un desarrollador apasionado creando muchas aplicaciones usando React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "fr", text: "Un développeur passionné créant de nombreuses applications en utilisant React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "de", text: "Ein passionierter Entwickler, der viele Apps mit React, React Native, Typescript, JavaScript, Java, C# erstellt" },
{ lang: "it", text: "Un sviluppatore passionato creando molte applicazioni usando React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "ru", text: "Персонализированный разработчик, создающий много приложений с использованием React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "zh", text: "一个热情的开发者创建了许多应用程序使用 React, React Native, Typescript, JavaScript, Java, C#" },
{ lang: "ja", text: "パッションである開発者が、React、React Native、Typescript、JavaScript、Java、C#を使用しているアプリケーションを複数作成しています。" }];

const WebHome = (client: clientState) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '400%', width: '95%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '100%', width: '45%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
    </View>
  );
};

const MobHome = (client: clientState) => {

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '275%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '75%', width: '70%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
    </View>
  );
};

export const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  })

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150
    }).start();
  };

  const dispatch = useAppDispatch();
  const client: clientState = useAppSelector(state => state.client);
  if (client.device == "mobile") return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {MobHome(client)}
    </Animated.View>
  );
  else return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {WebHome(client)}
    </Animated.View>
  );
}
