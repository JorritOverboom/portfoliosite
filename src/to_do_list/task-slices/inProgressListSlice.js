
import { createSlice } from '@reduxjs/toolkit';

export const inProgressListSlice = createSlice({
    name: 'inProgressList',
    initialState: [],
    reducers: {
        addInProgressTask: (state, action) => {
            state.push(action.payload);
        },  
        removeInProgressTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        }
    },
});

export const { addInProgressTask, removeInProgressTask } = inProgressListSlice.actions;
export default inProgressListSlice.reducer;