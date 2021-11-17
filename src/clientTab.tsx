import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "../App";
import { setClient } from "./clientReducer";
import { useAppDispatch, useAppSelector } from "./store";

export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setClient());
    })

    return (
        <View style={styles.header}>

        </View>
    )
}
