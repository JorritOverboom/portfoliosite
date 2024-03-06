
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToDos} from '../../utils/api.js';

export const fetchInitialToDoState = createAsyncThunk('toDoList/fetchInitialToDoList', async () => {
    try {
        const data = await fetchToDos();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching inital state:', error);
        throw error;
    }
});

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {tasks: [{taskId: 2, taskName: 'Henk', taskDescription: 'Heeeenk', id: 2}], status: 'idle', error: null},
    reducers: {
        addToDoTask: (state, action) => {
            state.tasks.push(action.payload);
        },  
        removeToDoTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialToDoState.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchInitialToDoState.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(fetchInitialToDoState.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addToDoTask, removeToDoTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const toDoListSlice = createSlice({
//     name: 'toDoList',
//     initialState: [],
//     reducers: {
//         addToDoTask: (state, action) => {
//             state.push(action.payload);
//         },  
//         removeToDoTask: (state, action) => {
//             return state.filter(task => task.id !== action.payload.id);
//         }
//     },
// });

// export const { addToDoTask, removeToDoTask } = toDoListSlice.actions;
// export default toDoListSlice.reducer;