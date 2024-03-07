
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToDoTasks, addNewTask, deleteTask, updateTaskToInProgress, updateTaskToFinished } from '../../utils/tasksAPI.js';


export const getToDoTasksFromDataBase = createAsyncThunk('toDoList/getToDoTasksFromDataBase', async () => {
    try {
        const data = await fetchToDoTasks();
        return data;
    } catch (error) {
        console.error('Error fetching updated to-do list:', error);
        throw error;
    }
});

export const createNewTask = createAsyncThunk('toDoList/createNewTask', async (newTask) => {
    try {
        const data = await addNewTask(newTask);
        return data;
    } catch (error) {
        console.error('Error adding new task:', error);
        throw error;
    }
});

export const removeTaskFromToDo = createAsyncThunk('toDoList/removeTask', async (id) => {
    try {
        const data = await deleteTask(id);
        return data;
    } catch (error) {
        console.error('Error removing task:', error);
        throw error;
    }
});

export const moveTaskToInProgressFromToDo = createAsyncThunk('toDoList/moveTaskToInProgressFromToDo', async (id) => {
    try {
        const res = await updateTaskToInProgress(id);
        return res;
    } catch (error) {
        console.error('Error moving task to in progress:', error);
        throw error;
    }
});

export const moveTaskToFinishedFromToDo = createAsyncThunk('toDoList/moveTaskToFinishedFromToDo', async (id) => {
    try {
        const res = await updateTaskToFinished(id);
        return res;
    } catch (error) {
        console.error('Error moving task to finished:', error);
        throw error;
    }
});

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {tasks: [], status: 'idle', error: null},
    reducers: {
        getToDoTasksFromState: (state, action) => {
            return action.payload;
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

export const { getToDoTasksFromState } = toDoListSlice.actions;
export default toDoListSlice.reducer;