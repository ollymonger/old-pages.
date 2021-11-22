import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UAParser } from 'ua-parser-js';

interface clientState {
    device: string;
}

const initialState: clientState = {
    device: 'null'
}

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state) => {
            let parser = new UAParser();
            let result = parser.getResult();
            state.device = result.device.type ? result.device.type : 'web';
        }
    }
})

export const { setClient } = clientSlice.actions;
export const getClient = (state: clientState) => state.device;

export default clientSlice.reducer;
