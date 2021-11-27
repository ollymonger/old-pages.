import React, { useCallback, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../App";
import { setClient, setLanguage, setScreenSize } from "./redux/clientReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { Route, Link, useNavigate } from 'react-router-native';
import { MobileHeader } from "./components/MobileHeader";
import { WebHeader } from "./components/WebHeader";


export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();
    const [screenSize, _setScreenSize] = React.useState({ width: 0, height: 0 });

    const handleWindowResize = useCallback(e =>{
        _setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        dispatch(setScreenSize({ width: window.innerWidth, height: window.innerHeight }));
    },[]);



    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [handleWindowResize]);


    if(client.device === "mobile"){
        return <MobileHeader/>
    } else if(client.height > 600 && client.width > 600){
        return <WebHeader/>
    } else {
        return <MobileHeader/>
    }
}
