import React, { useEffect } from "react";
import { View, Text, Button, Linking } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { useNavigate } from "react-router";

import { styles } from "../../../App";
import { menuItemsInLanguages } from "../../data/header/menuItemsInLanguage";
import { clientState, setClient, setLanguage } from "../../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const MobileHeader = () => {
    const [open, setOpen] = React.useState(false);
    const client: clientState = useAppSelector(state => state.client);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

    let navigator = useNavigate();

    let menuItems = menuItemsInLanguages.find(item => item.lang === client.lang);

    return (
        <View style={styles.header}>
            <View style={styles.navLeft}>
                <Text style={styles.headerTextColor} >yllo.cc</Text>
            </View>
            <View style={styles.navRight}>
                <Menu visible={open} onDismiss={closeMenu} anchor={<Button onPress={openMenu} color="#B084CC" title={menuItems.menu} />}>
                    <Menu.Item onPress={() => { navigator('/', { replace: true }); closeMenu(); }} title={menuItems.home}></Menu.Item>
                    <Divider />
                    <Menu.Item onPress={() => { navigator('/projects', { replace: true }); closeMenu(); }} title={menuItemsInLanguages.map(lang => {
                        if(lang.lang === client.lang){ return lang.projects; }
                    })} />
                    <Divider />
                    <Menu.Item onPress={() => { navigator('/contact', { replace: true }); closeMenu(); }} title={menuItems.contact} />
                </Menu>
            </View>
        </View>
    )
}