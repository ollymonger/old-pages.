import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

export type ItemProps = {
    title: string;
    icon: string;
    description: string;
    onPress?: () => void;
}

const Item: React.FC<{item: ItemProps, onPress: () => void, backgroundColor:string, textColor:string}> = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={{height:'12.5vh', justifyContent:'center', alignItems:'center'}}>
        <AntDesign name={item.icon} size={24} color={textColor} />
    </TouchableOpacity>
  );

export const RenderItem: React.FC<{item: ItemProps}> = ({ item }) => {
    return <View style={{width:'100%'}}><Item item={item} onPress={item.onPress} backgroundColor="black" textColor="black" /></View>
};
