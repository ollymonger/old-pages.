import React from "react";
import { View, FlatList, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAppSelector } from "../../redux/store";
import { ItemProps, RenderItem } from "./Item";

export const WorkCard: React.FC<{}> = () => {
    const [page, setPage] = React.useState(0);
    let client = useAppSelector(state => state.client)

    const data: ItemProps[] = [
        {
            icon:'smileo',
            title: "aboutme",
            description: "A website for a startup company Page 1",
            onPress: () => {
                setPage(0);
            }
        },
        {
            icon:'smileo',
            title: "work",
            description: "A website for a startup company 2",
            onPress: () => {
                setPage(1);
            }
        },
        {
            icon:'smileo',
            title: "hobbies",
            description: "A website for a startup company 3",
            onPress: () => {
                setPage(2);
            }
        },
        {
            icon:'smileo',
            title: "extra",
            description: "A website for a startup company 4",
            onPress: () => {
                setPage(3);
            }
        }
    ];

    if(client.device === "web" && client.width > 600 && client.height > 400) {
        return (
            <View style={{margin:'auto', width:'65%', height:'50vh', backgroundColor:'#34056A', borderRadius:5, display:'flex', flexDirection:'row'}}>
                <View style={{width:'10%', height:'100%'}}>
                    <FlatList renderItem={({ item }) => <RenderItem item={item} />} data={data} keyExtractor={item => item.title} />
                </View>
                <View style={{width:'80%', flex:1}}>
                    <View style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{data[page].title}</Text>
                        <Text style={{color:'white', fontSize:16}}>{data[page].description}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{margin:'auto', width:'65%', height:'50vh', backgroundColor:'#34056A', borderRadius:5, display:'flex'}}>
            <ScrollView style={{width:'100%'}}>
                <FlatList contentContainerStyle={{width:'25%'}} numColumns={data.length} renderItem={({ item }) => <RenderItem item={item} />} data={data} keyExtractor={item => item.title} />
            </ScrollView>
            <View>
                <View style={{width:'100%', height:'100%', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{data[page].title}</Text>
                    <Text style={{color:'white', fontSize:16}}>{data[page].description}</Text>
                </View>
            </View>
        </View>
    );
};
