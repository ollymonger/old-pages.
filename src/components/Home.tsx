import React, { useEffect, useRef } from "react";
import { View, Text, Animated, SafeAreaView, Button } from "react-native";
import App, { styles } from "../../App";
import { clientState, setLanguage, setSpecificLang } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

const welcomeMsg = [{ lang: "en", text: "Hi, I'm Olly!" }, { lang: "es", text: "Hola, soy Olly!" }, { lang: "fr", text: "Bonjour, je suis Olly!" }, { lang: "de", text: "Hallo, ich bin Olly!" },
{ lang: "it", text: "Ciao, sono Olly!" }, { lang: "ru", text: "Привет, я Olly!" }, { lang: "zh", text: "你好，我是Olly!" }, { lang: "ja", text: "こんにちは、私はOllyです!" }];

const developerMessage = [{ lang: "en", text: "A passionate developer creating lots of apps using React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "es", text: "Un desarrollador apasionado creando muchas aplicaciones usando React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "fr", text: "Un développeur passionné créant de nombreuses applications en utilisant React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "de", text: "Ein passionierter Entwickler, der viele Apps mit React, React Native, Typescript, JavaScript, Java, C# erstellt!" },
{ lang: "it", text: "Un sviluppatore passionato creando molte applicazioni usando React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "ru", text: "Персонализированный разработчик, создающий много приложений с использованием React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "zh", text: "一个热情的开发者创建了许多应用程序使用 React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "ja", text: "パッションである開発者が、React、React Native、Typescript、JavaScript、Java、C#を使用しているアプリケーションを複数作成しています。" }];

const secondaryMsg = [{ lang: "en", text: "This website is also available on all mobile devices and will fit to devices with any screen size! Oh, and it'll also use your browsers native language setting to determine what language to use!" },
{ lang: "es", text: "Esta página web está disponible también en todos los dispositivos móviles y se ajustará a cualquier tamaño de pantalla! Oh, y también usará el lenguaje nativo de su navegador para determinar el idioma a usar!" },
{ lang: "fr", text: "Ce site est également disponible sur tous les appareils mobiles et s'adaptera à tous les écrans! Oh, et il utilisera également la langue maternelle de votre navigateur pour déterminer la langue à utiliser!" },
{ lang: "de", text: "Diese Website ist auch auf allen mobilen Geräten verfügbar und passt zu jedem Bildschirm! Oh, und es wird auch die Muttersprache Ihres Browsers verwendet, um die zu verwendende Sprache zu bestimmen!" },
{ lang: "it", text: "Questo sito web è anche disponibile su tutti i dispositivi mobili e si adatta a qualsiasi schermo! Oh, e utilizzerà anche la lingua nativa del tuo browser per determinare la lingua da usare!" },
{ lang: "ru", text: "Этот сайт также доступен на всех мобильных устройствах и подойдет как к мобильным устройствам, так и к любым экранам! Да, и он также будет использовать родной язык вашего браузера, чтобы определить язык для использования!" },
{ lang: "zh", text: "这个网站也可以在所有移动设备上使用，并且适合任何屏幕尺寸！哦，它也会使用您的浏览器的原生语言设置来确定要使用哪种语言！" },
{ lang: "ja", text: "このウェブサイトはすべてのモバイルデバイスで利用できます。そして、どんな画面サイズでも適用できます！そして、それは、あなたのブラウザのネイティブ言語設定を使用して、どの言語を使用するかを決定します！" }];

const languageButtonText = [{ lang: "en", text: "Randomise Language" }, { lang: "es", text: "Idioma aleatorio" }, { lang: "fr", text: "Langue aléatoire" }, { lang: "de", text: "Zufällige Sprache" }, { lang: "it", text: "Lingua casuale" }, { lang: "ru", text: "Случайный язык" }, { lang: "zh", text: "随机语言" }, { lang: "ja", text: "ランダムな言語" }];

const WebHome = (client: clientState) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '400%', width: '95%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '100%', width: '45%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '75%', width: '45%' }}>
        {secondaryMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
    </View>
  );
};

const MobHome = (client: clientState) => {
  const dispatch = useAppDispatch();
  const setLang = () => {
    // pick random from array
    const languages = ["en", "es", "fr", "de", "it", "ru", "zh", "ja"];
    const random = Math.floor(Math.random() * languages.length);
    console.log("attempting to set to: " + languages[random]);
    dispatch(setSpecificLang(languages[random]));
  }

  let selected = languageButtonText.map(lang => { if (lang.lang === client.lang) { return lang.text } });
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: '275%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '75%', width: '70%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: '75%', width: '70%' }}>
        {secondaryMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <Button onPress={setLang} title={selected.toString()} />
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
