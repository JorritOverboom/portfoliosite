// pull request example

import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login/loginSlice';
import { tasksSlice } from './to_do_list/tasksSlice';

// Redux store
export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        tasks: tasksSlice.reducer,
    },
});