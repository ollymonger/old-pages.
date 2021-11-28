import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Image, Button } from "react-native";
import App, { mobileimage, styles } from "../../../App";
import { GitReposData } from "../../models/gitReposData";
import { clientState, setSpecificLang } from "../../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";

/* -- Data -- */
import { developerMessage } from "../../data/home/developerMessage";
import { languageButtonText } from "../../data/home/languageButtonText";
import { lastMsg } from "../../data/home/lastMsg";
import { secondaryMsg } from "../../data/home/secondaryMsg";
import { welcomeMsg } from "../../data/home/welcomeMsg";
import { GitRepo } from "./GitRepo";

const WebHome = (client: clientState) => {
  const dispatch = useAppDispatch();
  let selected = languageButtonText.map(lang => { if (lang.lang === client.lang) { return lang.text } });

  let fontsize = { primary: client.lang === "zh" || client.lang === "ja" ? "325%" : "400%", dev: client.lang === "zh" || client.lang === "ja" ? "100%" : "100%", secondary: client.lang === "zh" || client.lang === "ja" ? "74%" : "75%" };

  const setLang = () => {
    // pick random from array
    const languages = ["en", "es", "fr", "de", "it", "ru", "zh", "ja"];
    const random = Math.floor(Math.random() * languages.length);
    console.log("attempting to set to: " + languages[random]);
    dispatch(setSpecificLang(languages[random]));
  }

  return (
  <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', color: '#F7F7FF', fontSize: fontsize.primary, width: '95%' }}>{
        welcomeMsg.map(msg => { if (msg.lang === client.lang) { return msg.text } })}</Text>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#F7F7FF', fontSize: fontsize.dev, width: '45%' }}>
        {developerMessage.map(msg => { if (msg.lang === client.lang) { return msg.text } })}
      </Text>
      <View style={{position:'absolute',marginTop:'10%',marginLeft:'45%', width:'35%', height: '50%',borderRadius:'2.5%', backgroundColor:'#fff'}}>
          {client.githubRepos.length > 1 ? <View style={{width:'50%', height:'50%'}}>{client.githubRepos.map(repo => repo.stars >= 1 ? <GitRepo {...repo}/> : null)}</View> : <Text>Loading repos...</Text>}
      </View>
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
  const client: clientState = useAppSelector(state => state.client);
  let allRepos: GitReposData[] = [];

  useEffect(() => {
    fadeIn();
  });

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false
    }).start();
  };

  if (client.device == "mobile") return (
    <Animated.View style={[{ opacity: fadeAnim }]}>
      {MobHome(client)}
    </Animated.View>
  );
  else if(client.height > 600 && client.width > 640) return (
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
