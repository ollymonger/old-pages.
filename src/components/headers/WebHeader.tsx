import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../../App";
import { Route, Link } from 'react-router-native';
import { useAppSelector } from "../../redux/store";
import { clientState } from "../../redux/clientReducer";
import { menuItemsInLanguages } from "../../data/header/menuItemsInLanguage";

export const WebHeader = () => {
    const client: clientState = useAppSelector(state => state.client);
    
    // select menu item in current language
    let menuItems = menuItemsInLanguages.find(item => item.lang === client.lang ? item : item.lang === "en");

    return (

        <View style={styles.header} >
            <View style={styles.navLeft}>
                <Link to="/"><Text style={styles.headerTextColor}>yllo.cc</Text></Link>
            </View>
            <View style={styles.navRight}>
                    <View style={{ paddingRight: '5%' }}>
                        <Link to="/"><Text style={styles.headerTextColor}>{menuItems.home}</Text></Link>
                    </View>        
                    {/* <View style={{ paddingRight:'5%' }}>
                        <Link to="/projects"><Text style={styles.headerTextColor}>{menuItems.projects}</Text></Link>
                    </View>
                    <View>
                        <Link to="/contact"><Text style={styles.headerTextColor}>{menuItems.contact}</Text></Link>
                    </View> */}
            </View>
        </View >
    )
}
