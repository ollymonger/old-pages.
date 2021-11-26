import React, { useEffect } from "react";
import { View, Text, Button, Linking } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { Route, Link, Navigate, useNavigate } from 'react-router-native';

import { styles } from "../../App";
import { clientState, setClient, setLanguage } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

const menuItemsInLanguages = [{lang:"en", menu: "MENU", home: "HOME", projects: "PROJECTS", contact: "CONTACT"}, 
{lang:"fr", menu: "MENU", home: "ACCUEIL", projects: "PROJETS", contact: "CONTACT"}, 
{lang:"de", menu: "SPEISEKARTE", home: "HEIMAT", projects: "PROJEKTE", contact: "KONTAKT"},
{lang:"es", menu: "MENÚ", home: "HOGAR", projects: "PROYECTOS", contact: "CONTACTO"}, 
{lang:"it", menu: "MENÙ", home: "CASA", projects: "PROGETTI", contact: "CONTATTO"}, 
{lang:"ru", menu: "МЕНЮ", home: "ДОМ", projects: "ПРОЕКТЫ", contact: "КОНТАКТ"},
{lang:"zh", menu: "菜单", home: "家", projects: "项目", contact: "联系"}, 
{lang:"ja", menu: "メニュー", home: "家", projects: "プロジェクト", contact: "連絡先"}];


export const MobileHeader = () => {
    const [open, setOpen] = React.useState(false);
    const client: clientState = useAppSelector(state => state.client);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <View style={styles.header}>
            <View style={styles.navLeft}>
                <Text style={styles.headerTextColor} >yllo.cc</Text>
            </View>
            <View style={styles.navRight}>
                <Menu visible={open} onDismiss={closeMenu} anchor={<Button onPress={openMenu} color="#B084CC" title={menuItemsInLanguages.map(lang => {
                        if(lang.lang === client.lang){ return lang.menu.toString(); }
                    })} />}>
                    <Menu.Item onPress={() => { navigate('/', { replace: true }); closeMenu(); }} title={menuItemsInLanguages.map(lang => {
                        if(lang.lang === client.lang){ return lang.home; }
                    })}></Menu.Item>
                    <Divider />
                    <Menu.Item onPress={() => { navigate('/projects', { replace: true }); closeMenu(); }} title={menuItemsInLanguages.map(lang => {
                        if(lang.lang === client.lang){ return lang.projects; }
                    })} />
                    <Divider />
                    <Menu.Item onPress={() => { navigate('/contact', { replace: true }); closeMenu(); }} title={menuItemsInLanguages.map(lang => {
                        if(lang.lang === client.lang){ return lang.contact; }
                    })} />
                </Menu>
            </View>
        </View>
    )
}