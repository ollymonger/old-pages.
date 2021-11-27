import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';
import { Navigate, useNavigate } from 'react-router';
import { FC } from 'react';

export interface clientState {
    device: string;
    lang: string;
    width: number;
    height: number;
}

const initialState: clientState = {
    device: 'null',
    lang: 'en',
    width: window.innerWidth,
    height: window.innerHeight
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state) => {
            let parser = new UAParser();
            let result = parser.getResult();
            state.device = result.device.type ? result.device.type : 'web';
        },
        setScreenSize: (state, action: PayloadAction<{ width: number, height: number }>) => {
            state.width = action.payload.width;
            state.height = action.payload.height;
        },
        getState: (state) => {
            return state;
        },
        setLanguage: (state) => {
            if (window.navigator.language.indexOf('-') > 0) {
                // set state to only be first two characters of window.navigator.language
                state.lang = window.navigator.language.substring(0, 2);
            }
            else {
                state.lang = window.navigator.language;
            }
        },
        setSpecificLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload;
        },
        getLanguage: (state) => {
            state.lang;
        }
    }
})

export const { setClient, setLanguage, setSpecificLang, getLanguage, setScreenSize } = clientSlice.actions;
export const getClient = (state: clientState) => state;

export default clientSlice.reducer;
