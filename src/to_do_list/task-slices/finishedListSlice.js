
import { createSlice } from '@reduxjs/toolkit';

export const finishedListSlice = createSlice({
    name: 'finishedList',
    initialState: {tasks: [{taskId: 1, taskName: 'Henk', taskDescription: 'Heeeenk', id: 1}], status: 'idle', error: null},
    reducers: {
        addFinishedTask: (state, action) => {
            state.tasks.push(action.payload);
        },  
        removeFinishedTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    },
});

export const { addFinishedTask, removeFinishedTask } = finishedListSlice.actions;
export default finishedListSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const finishedListSlice = createSlice({
//     name: 'finishedList',
//     initialState: [],
//     reducers: {
//         addFinishedTask: (state, action) => {
//             state.push(action.payload);
//         },  
//         removeFinishedTask: (state, action) => {
//             return state.filter(task => task.id !== action.payload.id);
//         }
//     },
// });

// export const { addFinishedTask, removeFinishedTask } = finishedListSlice.actions;
// export default finishedListSlice.reducer;