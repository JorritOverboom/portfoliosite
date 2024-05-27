
import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: false,
    },
    reducers: {
        switchToDark: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
});

export const { switchToDark } = darkModeSlice.actions;
export default darkModeSlice.reducer;