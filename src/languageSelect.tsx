import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "../App";
import { setClient, setLanguage } from "./clientReducer";
import { useAppDispatch, useAppSelector } from "./store";
import { Route, Link } from 'react-router-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

export const LanguageSelect = () => {
    const [visible, setVisible] = React.useState(false);
    const closeMenu = () => setVisible(false);
    const openMenu = () => setVisible(true);

    const dispatch = useAppDispatch();
    const client = useAppSelector(state => state.client);

    return (
        <View>
            <Menu visible={visible} onDismiss={closeMenu} anchor={<Button onPress={openMenu}>
                <Text style={styles.headerTextColor}>LANG</Text>
            </Button>}>
                <Menu.Item onPress={() => { dispatch(setLanguage("english")) }} title="English" />
                <Divider />
                <Menu.Item onPress={() => { dispatch(setLanguage("french")) }} title="Item2" />
                <Divider />
                <Menu.Item onPress={() => { dispatch(setLanguage("german")) }} title="Item2" />
                <Divider />
                <Menu.Item onPress={() => { dispatch(setLanguage("japanese")) }} title="Item2" />
            </Menu>
        </View>
    );
}
