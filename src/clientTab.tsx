import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../App";
import { setClient, setLanguage } from "./redux/clientReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { Route, Link } from 'react-router-native';
import { MobileHeader } from "./components/MobileHeader";
import { WebHeader } from "./components/WebHeader";


export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setClient());
        dispatch(setLanguage());
    },[]);

    if(client.device === "mobile"){
        return <MobileHeader/>
    } else {
        return <WebHeader/>
    }
}
