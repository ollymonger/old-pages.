import React, { useEffect } from "react";
import { View, Text, Button, Linking } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { Route, Link, Navigate, useNavigate } from 'react-router-native';

import { styles } from "../../App";
import { setClient, setLanguage } from "../redux/clientReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

export const MobileHeader = () => {
    const [open, setOpen] = React.useState(false);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <View style={styles.header}>
            <View style={styles.navLeft}>
                <Text style={styles.headerTextColor} >yllo.cc</Text>
            </View>
            <View style={styles.navRight}>
                <Menu visible={open} onDismiss={closeMenu} anchor={<Button onPress={openMenu} color="#B084CC" title="Menu"/>}>
                    <Menu.Item onPress={() => { navigate('/', { replace: true }); closeMenu(); }} title="Home"></Menu.Item>
                    <Divider />
                    <Menu.Item onPress={() => { navigate('/projects', { replace: true }); closeMenu(); }} title="Projects" />
                    <Divider />
                    <Menu.Item onPress={() => { navigate('/contact', { replace: true }); closeMenu(); }} title="Contact" />
                </Menu>
            </View>
        </View>
    )
}