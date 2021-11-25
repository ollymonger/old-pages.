import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../App";
import { Route, Link } from 'react-router-native';


export const WebHeader = () => {
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