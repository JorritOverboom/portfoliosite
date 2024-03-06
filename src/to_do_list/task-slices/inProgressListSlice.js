
import { createSlice } from '@reduxjs/toolkit';

export const inProgressListSlice = createSlice({
    name: 'inProgressList',
    initialState: {tasks: [{taskId: 1, taskName: 'Henk', taskDescription: 'Heeeenk', id: 1}], status: 'idle', error: null},
    reducers: {
        addInProgressTask: (state, action) => {
            state.tasks.push(action.payload);
        },  
        removeInProgressTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    },
});

export const { addInProgressTask, removeInProgressTask } = inProgressListSlice.actions;
export default inProgressListSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const inProgressListSlice = createSlice({
//     name: 'inProgressList',
//     initialState: [],
//     reducers: {
//         addInProgressTask: (state, action) => {
//             state.push(action.payload);
//         },  
//         removeInProgressTask: (state, action) => {
//             return state.filter(task => task.id !== action.payload.id);
//         }
//     },
// });

// export const { addInProgressTask, removeInProgressTask } = inProgressListSlice.actions;
// export default inProgressListSlice.reducer;