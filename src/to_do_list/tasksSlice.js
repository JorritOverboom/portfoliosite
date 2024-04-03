// pull request example

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks, addNewTask, deleteTask, updateTask } from '../APIs/tasksAPI.js';

export const getTasks = createAsyncThunk('tasksList/getTasks', () => {
    try {
        const response = fetchTasks();
        return response;
    } catch (error) {
        console.error('Error fetching updated to-do list:', error);
        throw error;
    }
});

export const addTask = createAsyncThunk('tasksList/addTask', (newTask) => {
    try {
        console.log(newTask);
        addNewTask(newTask);
        const updatedTask = { ...newTask, status: 'todo' };
        return updatedTask;
    } catch (error) {
        console.error('Error adding new task:', error);
        throw error;
    }
});

export const removeTask = createAsyncThunk('tasksList/removeTask', (id) => {
    try {
        deleteTask(id);
        return id;
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
});

export const moveTask = createAsyncThunk('tasksList/moveTask', (task) => {
    try {
        updateTask(task);
        return task;
    } catch (error) {
        console.error('Error moving task to in progress:', error);
        throw error;
    }
});

export const tasksSlice = createSlice({
    name: 'tasksList',
    initialState: {tasks: [], status: 'idle', error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks.push(action.payload);
            })
            .addCase(addTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(removeTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const taskId = action.meta.arg.id;
                const updatedStatus = action.meta.arg.status;
                state.tasks = state.tasks.map(task => {
                    if (task.id === taskId) {
                        return { ...task, status: updatedStatus };
                    }
                    return task;
                });
            })
            .addCase(moveTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default tasksSlice.reducer;