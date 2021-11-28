import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Image, Button, TouchableOpacity, Linking } from "react-native";
import App, { mobileimage, styles } from "../../../App";
import { GitReposData } from "../../models/gitReposData";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export const GitRepo = (gitRepo: GitReposData ) => {
    const handleClick = () => {
        Linking.canOpenURL(gitRepo.url).then(supported => {
            if(supported){
                Linking.openURL(gitRepo.url);
            } else {
                console.log("Don't know how to open URI: " + gitRepo.url);
            }
        });
    }
    return(
        <View style={{paddingLeft:'10%', width:'200%', height:'190%', backgroundColor:'gray'}}>
            <View style={{width:'50%', height:'50%', paddingTop:'5%'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:'5%' }}>
                    <Image style={{ width: '30%', height:'30%'}}source={{uri:gitRepo.owner.avatar_url}}/>
                    
                    <TouchableOpacity onPress={handleClick} style={{width:'65%'}}>
                        <Text style={{marginLeft:'10%',  fontFamily:'Inter_900Black'}}>{gitRepo.name}</Text>
                    </TouchableOpacity>
                    <Icon name="source-repository" size={30} color="black" style={{marginTop:'-2%'}}/>
                </View>
                <Text style={{fontFamily:'Inter_300Light'}}>{gitRepo.description}</Text>
                <View style={{flexDirection:'row', paddingTop:'2%'}}>
                    <Icon name="license" size={30} color='white'/>
                    <Text style={{paddingTop:'2%',  fontFamily:'Inter_300Light'}}>{gitRepo.license.name}</Text>
                </View>
                <View style={{left:'120%', marginTop:'-35%'}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="star-box" size={30} color='white'/>
                        <Text style={{fontFamily:'Inter_900Black', marginLeft:'5%', marginTop:'2.5%'}}>
                            {gitRepo.stars} 
                        </Text>
                        <Icon name="sticker-alert-outline" size={30} color='white' style={{marginLeft:'5%'}}/>                    
                        <Text style={{fontFamily:'Inter_900Black', marginLeft:'5%', marginTop:'2.5%'}}>
                            {gitRepo.openIssues} 
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}