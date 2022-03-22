import React, { CSSProperties, useEffect } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

export const TextTyper: React.FC<{ title: string, time: number, style: StyleProp<TextStyle> }> = ({ title, time, style }) => {
    const [typed, setTyped] = React.useState('');
    const [done, setDone] = React.useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typed.length < title.length) {
                setTyped(typed + title[typed.length]);
                setDone(false);
            } else {
                setDone(true);
                console.log("Typer is complete.");
            }
        }, time);
        return () => clearTimeout(timer);
    }, [typed, title, time]);

    return (
        <Text style={style}>{typed}</Text>
    )
};
