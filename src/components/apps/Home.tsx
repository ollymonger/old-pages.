import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { clientState } from "../../redux/clientReducer";
import { useAppSelector } from "../../redux/store";
import { TextTyper } from "../TextTyper";
import { GestureEvent, PanGestureHandler, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import { SlideLookup } from "../Slides/index";
import { AntDesign } from '@expo/vector-icons';


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


let text = ["Passionate Developer", "Creative Thinker", "Problem Solver", "Team Player", "Motivated Individual", "Self-taught Developer"];
let random = Math.floor(Math.random() * text.length);
let title = text[random];

const WebHome: React.FC<clientState> = (client) => {
    const [state, setState] = useState(false);
    const [page, setPage] = useState(0);
    const [swipeState, setSwipeState] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState('right');
    const heightAnimation = useRef(new Animated.Value(475)).current;
    const _opacity = useRef(new Animated.Value(0)).current;

    const animateHeader = () => {
        Animated.timing(heightAnimation, {
            toValue: 200,
            duration: 300,
            useNativeDriver: false
        }).start((finished) => {

        });
    };
    
    const animateContent = () => {
        Animated.timing(_opacity, { 
            toValue: 1,
            duration: 200,
            useNativeDriver: false
        }).start();
    }

    const onComplete = (e: boolean) => {
        setState(e);
    };    
    
   

    return(
        <View style={{
            backgroundColor: "#34057B",
            height:'90VH',
            marginTop:'1vh'         
        }}>
            <Animated.View style={{width:'100%', height:heightAnimation, justifyContent: "center", alignItems: "center", paddingTop:'1vh'}}>
                <View style={{justifyContent:'flex-start', alignItems:'flex-start', width:'18vw'}}>  
                    <Text style={{color:'white', fontFamily:'Inter_300Light'}}>Hi I'm Olly, a...</Text>
                </View>
                <TextTyper title={title} time={100} style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize:'3rem'}} onComplete={onComplete} enabled />
                {state ? <TextTyper title={"Thanks for checking out my site."} time={100} style={{color:'white', fontFamily:'Inter_300Light'}} onComplete={() => { animateHeader(); animateContent(); }}/> : <></>}
            </Animated.View>
        </View>
    );
};


const MobHome: React.FC<clientState> = (client) => {
    const [state, setState] = useState(false);
    const [page, setPage] = useState(0);
    const [swipeState, setSwipeState] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState('right');
    const heightAnimation = useRef(new Animated.Value(475)).current;
    const _opacity = useRef(new Animated.Value(0)).current;

    const animateHeader = () => {
        Animated.timing(heightAnimation, {
            toValue: 130,
            duration: 300,
            useNativeDriver: false
        }).start((finished) => {
        });
    };

    const animateContent = () => {
        Animated.timing(_opacity, { 
            toValue: 1,
            duration: 200,
            useNativeDriver: false
        }).start();
    }
    
    const onComplete = (e: boolean) => {
        setState(e);
    };

    const handleSwipe = (e:GestureEvent<PanGestureHandlerEventPayload>) => {
        let startingX = 0;
        let localX = e.nativeEvent.translationX;
        let localPage = page;
        if(e.nativeEvent.state === 2){
            startingX = localX;
        }
        if(e.nativeEvent.state === 4){
            if(localX < startingX){
                // user swiping left
                setSwipeDirection('left');
            }
            if(localX > startingX){
                // user swiping right
                setSwipeDirection('right');
            }
            setSwipeState(true);
        }
        if (e.nativeEvent.state === 5) {
            if (localX > 0 && localX - startingX > 125) {
                localPage = page - 1;
                if(localPage < 0) localPage = 2;
                setPage(localPage);
                if (page < 0) setPage(2);
            }
            if(localX < 0 && startingX - localX > 125) {
                localPage = page + 1;
                if(localPage > 2) localPage = 0;
                setPage(localPage);
                if (page > 2) setPage(0);
            }
            setSwipeState(false);
        }
    }

    const SlideToShow = () => {
        let asString;
        if(page == 0) asString = 'AboutMe';
        if(page == 1) asString = 'Page2';
        if(page == 2) asString = 'Page3';
        const Slide = SlideLookup[asString];
        return <Slide />;
    }

    return(
            <View style={{
                backgroundColor: "#34057B",
                height:'86vh',
                overflow:'hidden' 
            }}>
                <Animated.View style={{width:'100%', height:heightAnimation, justifyContent: "center", alignItems: "center", paddingTop:'1vh'}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>  
                        <Text style={{color:'white', fontFamily:'Inter_300Light'}}>Hi I'm Olly, a...</Text>
                    </View>
                    <TextTyper title={title} time={100} style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize:'1.95rem'}} onComplete={onComplete} enabled />
                    {state ? <TextTyper title={"Thanks for checking out my site."} time={100} style={{color:'white', fontFamily:'Inter_300Light'}} onComplete={() => { animateHeader(); animateContent(); }}/> : <></>}
                </Animated.View>
                    <PanGestureHandler onGestureEvent={handleSwipe}>
                        <Animated.View style={{ width:'99vw', height:client.height <= 750 ? '68vh' : '73vh',backgroundColor:'#34056A', 
                            opacity:_opacity,                
                            borderTopLeftRadius: 50 / 2, borderTopRightRadius: 50 / 2, marginLeft:'0.5vw'}}>
                                {swipeState ? <View style={{position:'absolute'}}>
                                    <AntDesign name={swipeDirection === 'right' ? "stepbackward" : "stepforward"} size={24} color="lightgray" style={{marginLeft:'45vw'}} />
                                </View> : <></>}
                                <SlideToShow/>
                        </Animated.View>
                    </PanGestureHandler>
            </View>   
    );
};
