
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFinishedTasks, deleteTask, updateTaskToToDo, updateTaskToInProgress } from '../../utils/tasksAPI.js';

export const getFinishedTasksFromDataBase = createAsyncThunk('finishedList/getFinishedTasksFromDataBase', () => {
    try {
        const data = fetchFinishedTasks();
        return data;
    } catch (error) {
        console.error('Error fetching inital state:', error);
        throw error;
    }
});

export const removeTaskFromFinished = createAsyncThunk('finishedList/removeTask', (id) => {
    try {
        deleteTask(id);
        return id;
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
});

export const moveTaskToToDoFromFinished = createAsyncThunk('finishedList/moveTaskToToDoFromFinished', (id) => {
    try {
        updateTaskToToDo(id);
        return id;
    } catch (error) {
        console.error('Error moving task to to-do:', error);
        throw error;
    }
});

export const moveTaskToInProgressFromFinished = createAsyncThunk('finishedList/moveTaskToInProgressFromFinished', (id) => {
    try {
        updateTaskToInProgress(id);
        return id;
    } catch (error) {
        console.error('Error moving task to in progress:', error);
        throw error;
    }
});

export const finishedListSlice = createSlice({
    name: 'finishedList',
    initialState: {tasks: [], status: 'idle', error: null},
    reducers: {
        addTaskToFinished: (state, action) => {
            const task = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                status: 'finished'
            }
            state.tasks.push(task);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFinishedTasksFromDataBase.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFinishedTasksFromDataBase.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(getFinishedTasksFromDataBase.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeTaskFromFinished.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeTaskFromFinished.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(removeTaskFromFinished.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToToDoFromFinished.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToToDoFromFinished.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToToDoFromFinished.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToInProgressFromFinished.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToInProgressFromFinished.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToInProgressFromFinished.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { addTaskToFinished } = finishedListSlice.actions;
export default finishedListSlice.reducer;