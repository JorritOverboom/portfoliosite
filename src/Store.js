
import { configureStore } from '@reduxjs/toolkit';
import { toDoListSlice } from './to_do_list/task-slices/toDoListSlice';
import { inProgressListSlice } from './to_do_list/task-slices/inProgressListSlice';
import { finishedListSlice } from './to_do_list/task-slices/finishedListSlice';

export const store = configureStore({
    reducer: {
        toDoList: toDoListSlice,
        inProgressList: inProgressListSlice,
        finishedList: finishedListSlice
    },
});