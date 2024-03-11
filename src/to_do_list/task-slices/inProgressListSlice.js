
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInProgressTasks, deleteTask, updateTaskToToDo, updateTaskToFinished } from '../../utils/tasksAPI.js';

export const getInProgressTasksFromDataBase = createAsyncThunk('inProgressList/getInProgressTasksFromDataBase', () => {
    try {
        const data = fetchInProgressTasks();
        return data;
    } catch (error) {
        console.error('Error fetching inital state:', error);
        throw error;
    }
});

export const removeTaskFromInProgress = createAsyncThunk('inProgressList/removeTask', (id) => {
    try {
        deleteTask(id);
        return id;
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
});

export const moveTaskToToDoFromInProgress = createAsyncThunk('inProgressList/moveTaskToToDoFromInProgress', (id) => {
    try {
        updateTaskToToDo(id);
        return id;
    } catch (error) {
        console.error('Error moving task to to-do:', error);
        throw error;
    }
});

export const moveTaskToFinishedFromInProgress = createAsyncThunk('inProgressList/moveTaskToFinishedFromInProgress', (id) => {
    try {
        updateTaskToFinished(id);
        return id;
    } catch (error) {
        console.error('Error moving task to finished:', error);
        throw error;
    }
});

export const inProgressListSlice = createSlice({
    name: 'inProgressList',
    initialState: {tasks: [], status: 'idle', error: null},
    reducers: {
        addTaskToInProgress: (state, action) => {
            const task = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                status: 'inprogress'
            }
            state.tasks.push(task);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInProgressTasksFromDataBase.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getInProgressTasksFromDataBase.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(getInProgressTasksFromDataBase.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeTaskFromInProgress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeTaskFromInProgress.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(removeTaskFromInProgress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToToDoFromInProgress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToToDoFromInProgress.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToToDoFromInProgress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToFinishedFromInProgress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToFinishedFromInProgress.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToFinishedFromInProgress.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { addTaskToInProgress } = inProgressListSlice.actions;
export default inProgressListSlice.reducer;