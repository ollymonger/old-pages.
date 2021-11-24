import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';

export interface clientState {
    device: string;
    lang: string;
}

const initialState: clientState = {
    device: 'null',
    lang: 'english'
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
        setLanguage: (state, action: PayloadAction<string>) => {
            action.payload.toLowerCase() === 'english' ? state.lang = 'english' : state.lang = 'french';
        },
        getLanguage: (state) => {
            state.lang;
        }
    }
})

export const { setClient, setLanguage, getLanguage } = clientSlice.actions;
export const getClient = (state: clientState) => state;

export default clientSlice.reducer;
