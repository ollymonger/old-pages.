import React, { CSSProperties, useEffect } from 'react';
import { StyleProp, View,Text, TextStyle } from 'react-native';

export const TextTyper: React.FC<{ title: string, time: number, style: StyleProp<TextStyle>, onComplete: (e:boolean) => void, enabled?:boolean }> = ({ title, time, style, onComplete, enabled }) => {
    const [typed, setTyped] = React.useState('');
    const [done, setDone] = React.useState(false);
    const [showLine, setShowLine] = React.useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (typed.length < title.length) {
                setTyped(typed + title[typed.length]);
            } else {
                onComplete(true);
                setDone(true);
                clearInterval(interval);
            }
        }, time);       

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [typed]);


    useEffect(() => {
        if(done && enabled){
            const interval = setInterval(() => {
                setShowLine(!showLine);
            }, 500);
            return () => clearInterval(interval);
        }
    }, [done, showLine]);

    return (
        <View>
            <Text style={style}>{typed} <Text style={{position:'absolute', }}>{showLine ? '|' : ''}</Text></Text>
        </View>
    )
};
