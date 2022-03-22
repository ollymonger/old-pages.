import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { clientState } from "../../redux/clientReducer";
import { useAppSelector } from "../../redux/store";
import { TextTyper } from "../TextTyper";

export const Home = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const client: clientState = useAppSelector(state => state.client);
    
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
};


let text = ["Passionate Developer", "Creative Thinker", "Problem Solver", "Team Player"];
let random = Math.floor(Math.random() * text.length);
let title = text[random];

const WebHome: React.FC<clientState> = (client) => {
    const [state, setState] = useState(false);

    const onComplete = (e: boolean) => {
        setState(e);
    };

    return(
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#34057B",
            height:'90VH',
            marginTop:'1vh'         
        }}>
            <TextTyper title={title} time={100} style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize:'3rem'}} onComplete={onComplete} enabled />
            {state ? <TextTyper title={"Thanks for checking out my site."} time={100} style={{color:'white', fontFamily:'Inter_300Light'}} onComplete={() => {}}/> : <></>}
        </View>
    );
};


const MobHome: React.FC<clientState> = (client) => {
    // Requirements: 
    /* - Seperate container to hold the content
    - Title text, subtitle text, and a button
    - Background of the container must fit in with the colour scheme*/
    const [state, setState] = useState(false);

    const onComplete = (e: boolean) => {
        setState(e);
    };
    

    return(
        
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#34057B",
            height:'87vh'       
        }}>
            <TextTyper title={title} time={100} style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize:'2rem'}} onComplete={onComplete} enabled/>
            
            {state ? <TextTyper title={"Thanks for checking out my site."} time={100} style={{color:'white', fontFamily:'Inter_300Light'}} onComplete={() => {}}/> : <></>}
        </View>
    );
};
