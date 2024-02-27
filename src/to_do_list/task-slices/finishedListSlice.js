
import { createSlice } from '@reduxjs/toolkit';

export const finishedListSlice = createSlice({
    name: 'finishedList',
    initialState: [],
    reducers: {
        addFinishedTask: (state, action) => {
            state.push(action.payload);
        },  
        removeFinishedTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        }
    },
});

export const { addFinishedTask, removeFinishedTask } = finishedListSlice.actions;
export default finishedListSlice.reducer;