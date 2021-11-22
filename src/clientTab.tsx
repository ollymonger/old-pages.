import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../App";
import { setClient } from "./clientReducer";
import { useAppDispatch, useAppSelector } from "./store";
import { Route, Link } from 'react-router-native';


export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setClient());
    })

    return (
        <View style={styles.header}>
            <View style={styles.navLeft}> 
                <Link to="/"><Text style={styles.headerTextColor}>yllo.cc</Text></Link>
            </View>
            <View style={styles.navRight}>
                <Link to="/projects">
                    <View style={{right:'50%'}}>
                        <Text style={styles.headerTextColor}>PROJECTS</Text>
                    </View>
                </Link>
                <Link to="/contact">
                    <View>
                        <Text style={styles.headerTextColor}>CONTACT</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}
