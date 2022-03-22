import React, { useEffect, useRef } from "react";
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

const WebHome: React.FC<clientState> = (client) => {
    let text = ["Passionate Developer", "Creative Thinker", "Problem Solver", "Team Player"];
    let random = Math.floor(Math.random() * text.length);
    let title = text[random];

    return(
        <View>
            {client.device}
            <TextTyper title={title} time={100} style={{ color: 'white'}} />
        </View>
    );
};


const MobHome: React.FC<clientState> = (client) => {
    // Requirements: 
    /* - Seperate container to hold the content
    - Title text, subtitle text, and a button
    - Background of the container must fit in with the colour scheme*/
    let text = ["Passionate Developer", "Creative Thinker", "Problem Solver", "Team Player"];
    let random = Math.floor(Math.random() * text.length);
    let title = text[random];
    return(
        <View>
            {client.device}
            <TextTyper title={title} time={100} style={{ color: 'white'}} />
        </View>
    );
};
