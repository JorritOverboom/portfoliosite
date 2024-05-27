
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login/loginSlice';
import { tasksSlice } from './to_do_list/tasksSlice';
import { darkModeSlice } from './root/darkModeSlice';

// Redux store
export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer,
        login: loginSlice.reducer,
        tasks: tasksSlice.reducer,
    },
});