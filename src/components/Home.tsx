import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Image, Button } from "react-native";
import App, { mobileimage, styles } from "../../App";
import { clientState, setLanguage, setSpecificLang } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

const welcomeMsg = [{ lang: "en", text: "Hi, I'm Olly!" }, { lang: "es", text: "Hola, soy Olly!" }, { lang: "fr", text: "Bonjour, je suis Olly!" }, { lang: "de", text: "Hallo, ich bin Olly!" },
{ lang: "it", text: "Ciao, sono Olly!" }, { lang: "ru", text: "Привет, я Olly!" }, { lang: "zh", text: "你好，我是Olly!" }, { lang: "ja", text: "こんにちは、私はOllyです!" }];

const developerMessage = [{ lang: "en", text: "A passionate developer from London, creating lots of apps using React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "es", text: "Un desarrollador apasionado de Londres, creando muchas aplicaciones usando React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "fr", text: "Un développeur passionné de Londres, créant beaucoup d'applications en utilisant React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "de", text: "Ein passionierter Entwickler aus London, die viele Apps mit React, React Native, Typescript, JavaScript, Java, C# erstellt!" },
{ lang: "it", text: "Uno sviluppatore passionato da Londra, creando molte applicazioni usando React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "ru", text: "Персональный разработчик из Лондона, создающий много приложений с использованием React, React Native, Typescript, JavaScript, Java, C#!" },
{ lang: "zh", text: "一个热爱开发的英国开发者，创建了许多应用程序使用React、React Native、Typescript、JavaScript、Java、C#!" },
{ lang: "ja", text: "英国の人気のある開発者です。React、React Native、Typescript、JavaScript、Java、C#を使用しているアプリケーションを作成します！" }];

const secondaryMsg = [{ lang: "en", text: "I have designed this site to showcase some of my skills, feel free to have a look around! This site is completely resizable, whether you're viewing this on a mobile or a web browser! Check it out, if you're on a web browser try resizing your page! You'll see the mobile header & mobile components instead of the web components!" },
{ lang: "es", text: "He diseñado este sitio para mostrar algunas de mis habilidades, ¡sea libre de ver por todo el sitio! Este sitio es totalmente redimensionable, aunque esté viendo esto en un dispositivo móvil o un navegador web! ¡Revisa esto, si estás en un navegador web, prueba a redimensionar tu página! ¡Vas a ver el encabezado móvil y los componentes móviles en lugar de los componentes web!" },
{ lang: "fr", text: "J'ai conçu ce site pour montrer quelques de mes compétences, n'hésitez pas à y aller! Ce site est entièrement redimensionnable, quelle que soit la taille de votre écran! Regardez-le, si vous êtes sur un navigateur web, essayez de redimensionner votre page!" },
{ lang: "de", text: "Ich habe diese Website entworfen, um einige meiner Fähigkeiten zu zeigen, frei von einem Blick darüber! Diese Website ist vollständig skalierbar, ob Sie dies auf einem Mobilgerät oder einem Webbrowser sehen! Überprüfen Sie es, wenn Sie auf einem Webbrowser sehen, versuchen Sie, Ihre Seite zu skalieren!" },
{ lang: "it", text: "Ho progettato questo sito per mostrare alcune delle mie competenze, non esitate a dare un'occhiata! Questo sito è interamente ridimensionabile, anche se si sta visualizzando su un dispositivo mobile o un browser web! Controlla, se si sta visualizzando su un browser web, prova a ridimensionare la pagina!" },
{ lang: "ru", text: "Я создал этот сайт, чтобы показать некоторые из моих навыков, не беспокойтесь, посмотрите по всему сайту! Этот сайт полностью изменяемый, даже если вы просматриваете это на мобильном устройстве или в браузере! Проверьте его, если вы на браузере, попробуйте изменить размер страницы!" },
{ lang: "zh", text: "我设计了这个网站, 以展示一些我的技能, 请自由浏览! 这个网站是完全可以调整大小的, 即使你在移动设备或者网页浏览器上查看! 检查它, 如果你在网页浏览器上, 请尝试调整你的页面大小!" },
{ lang: "ja", text:"このサイトは私のスキルの一部を紹介するように設計されています。お気軽にご覧ください。このサイトは、モバイルで表示している場合でもWebブラウザーで表示している場合でも、完全にサイズ変更できます。 Webブラウザーを使用している場合は、ページのサイズを変更してみてください。 Webコンポーネントの代わりに、モバイルヘッダーとモバイルコンポーネントが表示されます。" }];

const lastMsg = [{ lang: "en", text: "Have a project, or an idea? Feel free to contact me using the contact link either in the menu, or the header. Oh, have you noticed the button below? This site also checks your browser's native language, and adjusts the site accordingly!"},
{lang: "es", text: "¿Tienes un proyecto o una idea? No dude en contactarme usando el enlace de contacto en el menú o en el encabezado. Oh, ¿has notado el botón de abajo? Este sitio también verifica el idioma nativo de su navegador y ajusta el sitio en consecuencia!"},
{lang: "fr", text: "Vous avez un projet, une idée? N'hésitez pas à me contacter en utilisant le lien contact soit dans le menu, soit dans l'entête. Oh, avez-vous remarqué le bouton ci-dessous ? Ce site vérifie également la langue maternelle de votre navigateur et ajuste le site en conséquence!"},
{ lang: "de", text: "Sie haben ein Projekt oder eine Idee? Kontaktieren Sie mich gerne über den Kontaktlink entweder im Menü oder in der Kopfzeile. Oh, haben Sie den Button unten bemerkt? Diese Site überprüft auch die Muttersprache Ihres Browsers und passt die Site entsprechend an!"},
{ lang: "it", text: "Hai un progetto o un'idea? Non esitate a contattarmi utilizzando il link di contatto nel menu o nell'intestazione. Oh, hai notato il pulsante sotto? Questo sito anche controlla la lingua nativa del tuo browser e adatta il sito in conseguenza!"},
{ lang: "ru", text: "У вас есть проект или идея? Не беспокойтесь, пожалуйста, свяжитесь со мной, используя ссылку контакт в меню или в заголовке. О, вы заметили кнопку ниже? Этот сайт также проверяет национальный язык вашего браузера и применяет его в соответствии с этим!"},
{ lang: "zh", text: "你有一个项目或一个想法？请联系我，使用联系链接在菜单或标题栏。哦，你注意到了下面的按钮吗？这个网站也检查了你的浏览器的本地语言，并适应网站!"},
{ lang: "ja", text: "あなたのプロジェクトまたはアイデア？お問い合わせは、メニューまたはヘッダーのリンクを使用してください。お気に入りのボタンを見ていますか？このサイトは、あなたのブラウザーのネイティブ言語を確認し、それに合わせてサイトを調整します!" }];

const languageButtonText = [{ lang: "en", text: "Randomise Language" }, { lang: "es", text: "Idioma aleatorio" }, { lang: "fr", text: "Langue aléatoire" }, { lang: "de", text: "Zufällige Sprache" }, { lang: "it", text: "Lingua casuale" }, { lang: "ru", text: "Случайный язык" }, { lang: "zh", text: "随机语言" }, { lang: "ja", text: "ランダムな言語" }];


const WebHome = (client: clientState) => {
  const dispatch = useAppDispatch();
  const setLang = () => {
    // pick random from array
    const languages = ["en", "es", "fr", "de", "it", "ru", "zh", "ja"];
    const random = Math.floor(Math.random() * languages.length);
    console.log("attempting to set to: " + languages[random]);
    dispatch(setSpecificLang(languages[random]));
  }
  let selected = languageButtonText.map(lang => { if (lang.lang === client.lang) { return lang.text } });

  let fontsize = { primary: client.lang === "zh" || client.lang === "ja" ? "325%" : "400%", dev: client.lang === "zh" || client.lang === "ja" ? "100%" : "100%", secondary: client.lang === "zh" || client.lang === "ja" ? "74%" : "75%" };


  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: fontsize.primary, width: '95%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: fontsize.dev, width: '45%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: fontsize.secondary, width: '45%' }}>
        {secondaryMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>    
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: fontsize.secondary, width: '45%', paddingTop:'2%' }}>
        {lastMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <View style={{width: '50%', paddingTop:'5%'}}><Button onPress={setLang} title={selected.toString()} color="#B084CC" /></View>
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
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: client.lang === "ja" ? "200%" : "250%" }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
        
      <View>
        <Image style={{opacity:0.1, position:'absolute',
          width: window.innerWidth / 1.25, height: window.innerHeight / 1.25,
          resizeMode: 'contain', marginTop:'-20%'}}
          blurRadius={1.5}
          borderRadius={10}
          source={mobileimage}
        />
      </View>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: client.lang === "ja" ? "75%" : "80%", width: '95%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: client.lang === "ja" ? "75%" : "80%", width: '95%' }}>
        {secondaryMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>      
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: client.lang === "ja" ? "75%" : "80%", width: '95%', paddingTop:'1%' }}>
        {lastMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <View style={{width: '70%', paddingTop:'5%'}}><Button onPress={setLang} title={selected.toString()} color="#B084CC" /></View>
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
      duration: 500
    }).start();
  };

  const dispatch = useAppDispatch();
  const client: clientState = useAppSelector(state => state.client);
  console.log(client.width);
  if (client.device == "mobile") return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {MobHome(client)}
    </Animated.View>
  );
  else if(client.height > 640 && client.width > 640) return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {WebHome(client)}
    </Animated.View>
  );
  else return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {MobHome(client)}
    </Animated.View>
  );
}
