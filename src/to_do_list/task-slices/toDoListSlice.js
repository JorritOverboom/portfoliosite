
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToDoTasks, addNewTask, deleteTask, updateTaskToInProgress, updateTaskToFinished } from '../../utils/tasksAPI.js';


export const getToDoTasksFromDataBase = createAsyncThunk('toDoList/getToDoTasksFromDataBase', () => {
    try {
        const data = fetchToDoTasks();
        return data;
    } catch (error) {
        console.error('Error fetching updated to-do list:', error);
        throw error;
    }
});

export const createNewTask = createAsyncThunk('toDoList/createNewTask', (newTask) => {
    try {
        addNewTask(newTask);
        return newTask;
    } catch (error) {
        console.error('Error adding new task:', error);
        throw error;
    }
});

export const removeTaskFromToDo = createAsyncThunk('toDoList/removeTask', (id) => {
    try {
        deleteTask(id);
        return id;
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
});

export const moveTaskToInProgressFromToDo = createAsyncThunk('toDoList/moveTaskToInProgressFromToDo', (id) => {
    try {
        updateTaskToInProgress(id);
        return id;
    } catch (error) {
        console.error('Error moving task to in progress:', error);
        throw error;
    }
});

export const moveTaskToFinishedFromToDo = createAsyncThunk('toDoList/moveTaskToFinishedFromToDo', (id) => {
    try {
        updateTaskToFinished(id);
        return id;
    } catch (error) {
        console.error('Error moving task to finished:', error);
        throw error;
    }
});

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {tasks: [], status: 'idle', error: null},
    reducers: {
        addTaskToToDo: (state, action) => {
            const task = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                status: 'todo'
            }
            state.tasks.push(task);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToDoTasksFromDataBase.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getToDoTasksFromDataBase.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload;
            })
            .addCase(getToDoTasksFromDataBase.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createNewTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createNewTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks.push(action.payload);
            })
            .addCase(createNewTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeTaskFromToDo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeTaskFromToDo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(removeTaskFromToDo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToInProgressFromToDo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToInProgressFromToDo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToInProgressFromToDo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(moveTaskToFinishedFromToDo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(moveTaskToFinishedFromToDo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg);
            })
            .addCase(moveTaskToFinishedFromToDo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { addTaskToToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;