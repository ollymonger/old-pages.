import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';

export interface clientState {
    device: string;
    lang: string;
}

const initialState: clientState = {
    device: 'null',
    lang: 'en'
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state) => {
            let parser = new UAParser();
            let result = parser.getResult();
            state.device = result.device.type ? result.device.type : 'mobile';
        },
        setLanguage: (state) => {
            if(window.navigator.language.indexOf('-') > 0){
                // set state to only be first two characters of window.navigator.language
                state.lang = window.navigator.language.substring(0, 2);
            }
            else{
                state.lang = window.navigator.language;
            }
        },
        getLanguage: (state) => {
            state.lang;
        }
    }
})

export const { setClient, setLanguage, getLanguage } = clientSlice.actions;
export const getClient = (state: clientState) => state;

export default clientSlice.reducer;
