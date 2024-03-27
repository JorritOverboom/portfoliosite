
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './login/loginSlice';
import { toDoListSlice } from './to_do_list/task-slices/toDoListSlice';
import { inProgressListSlice } from './to_do_list/task-slices/inProgressListSlice';
import { finishedListSlice } from './to_do_list/task-slices/finishedListSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        toDoList: toDoListSlice.reducer,
        inProgressList: inProgressListSlice.reducer,
        finishedList: finishedListSlice.reducer
    },
});