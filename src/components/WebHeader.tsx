import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../App";
import { Route, Link } from 'react-router-native';
import { useAppSelector } from "../redux/store";
import { clientState } from "../redux/clientReducer";

const menuItemsInLanguages = [{lang:"en", menu: "MENU", home: "HOME", projects: "PROJECTS", contact: "CONTACT"}, 
{lang:"fr", menu: "MENU", home: "ACCUEIL", projects: "PROJETS", contact: "CONTACT"}, 
{lang:"de", menu: "SPEISEKARTE", home: "HEIMAT", projects: "PROJEKTE", contact: "KONTAKT"},
{lang:"es", menu: "MENÚ", home: "HOGAR", projects: "PROYECTOS", contact: "CONTACTO"}, 
{lang:"it", menu: "MENÙ", home: "CASA", projects: "PROGETTI", contact: "CONTATTO"}, 
{lang:"ru", menu: "МЕНЮ", home: "ДОМ", projects: "ПРОЕКТЫ", contact: "КОНТАКТ"},
{lang:"zh", menu: "菜单", home: "家", projects: "项目", contact: "联系"}, 
{lang:"ja", menu: "メニュー", home: "家", projects: "プロジェクト", contact: "連絡先"}];


export const WebHeader = () => {
    const client: clientState = useAppSelector(state => state.client);
    
    // select menu item in current language
    let menuItems = menuItemsInLanguages.find(item => item.lang === client.lang);

    return (

        <View style={styles.header} >
            <View style={styles.navLeft}>
                <Link to="/"><Text style={styles.headerTextColor}>yllo.cc</Text></Link>
            </View>
            <View style={styles.navRight}>
                    <View style={{ paddingRight: '5%' }}>
                        <Link to="/"><Text style={styles.headerTextColor}>{menuItems.home}</Text></Link>
                    </View>        
                    <View style={{ paddingRight:'5%' }}>
                        <Link to="/projects"><Text style={styles.headerTextColor}>{menuItems.projects}</Text></Link>
                    </View>
                    <View>
                        <Link to="/contact"><Text style={styles.headerTextColor}>{menuItems.contact}</Text></Link>
                    </View>
            </View>
        </View >
    )
}