import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Platform } from 'react-native';

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
            state.device = Platform.OS;
        }
    }
})

export const { setClient } = clientSlice.actions;
export const getClient = (state: clientState) => state.device;

export default clientSlice.reducer;
