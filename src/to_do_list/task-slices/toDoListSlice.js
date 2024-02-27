
import { createSlice } from '@reduxjs/toolkit';

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: [],
    reducers: {
        addToDoTask: (state, action) => {
            state.push(action.payload);
        },  
        removeToDoTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        }
    },
});

export const { addToDoTask, removeToDoTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;