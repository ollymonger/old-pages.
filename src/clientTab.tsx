import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../App";
import { setClient, setLanguage } from "./redux/clientReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { Route, Link } from 'react-router-native';
import { LanguageSelect } from "./languageSelect";
import { MobileHeader } from "./components/MobileHeader";


export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setClient());
        dispatch(setLanguage());
    });

    if(client.device === "mobile"){
        return <MobileHeader/>
    } else {
        return (
            <View style={styles.header} >
                <View style={styles.navLeft}>
                    <Link to="/"><Text style={styles.headerTextColor}>yllo.cc</Text></Link>
                </View>
                <View style={styles.navRight}>
                    <Link to="/projects">
                        <View style={{ right: '50%' }}>
                            <Text style={styles.headerTextColor}>PROJECTS</Text>
                        </View>
                    </Link>
                    <Link to="/contact">
                        <View>
                            <Text style={styles.headerTextColor}>CONTACT</Text>
                        </View>
                    </Link>
                </View>
            </View >
        )
    }
}
