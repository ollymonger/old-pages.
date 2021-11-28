import React, { useCallback, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../App";
import { addGithubRepos, setClient, setLanguage, setScreenSize } from "./redux/clientReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { MobileHeader } from "./components/MobileHeader";
import { WebHeader } from "./components/WebHeader";
import { GitReposData } from "./models/gitReposData";


export const ClientTab = () => {
    let client = useAppSelector(state => state.client)
    const dispatch = useAppDispatch();
    const [screenSize, _setScreenSize] = React.useState({ width: 0, height: 0 });

    const handleWindowResize = useCallback(e =>{
        _setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        dispatch(setScreenSize({ width: window.innerWidth, height: window.innerHeight }));
    },[]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        
        dispatch(setClient());
        dispatch(setLanguage());
        // get git repos for user
        fetch("https://api.github.com/users/ollymonger/repos").then(res => res.json()).then(data => {
            //foreach item in data
            for(let item in data){
                let repo: GitReposData = { 
                    id: data[item].id,
                    name: data[item].name,
                    description: data[item].description,
                    license: data[item].license,
                    full_name: data[item].full_name,
                    owner: {
                        login: data[item].owner.login,
                        id: data[item].owner.id,
                        avatar_url: data[item].owner.avatar_url
                    },
                    openIssues: data[item].open_issues,
                    stars: data[item].stargazers_count,
                    url: data[item].html_url
                };
                dispatch(addGithubRepos(repo));
            }
            console.log(client.githubRepos);
        });
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
        
    }, [handleWindowResize]);


    if(client.device === "mobile"){
        return <MobileHeader/>
    } else if(client.height > 600 && client.width > 640){
        return <WebHeader/>
    } else {
        return <MobileHeader/>
    }
}
