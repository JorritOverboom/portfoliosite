const express = require('express');
const tasksRoutes = express.Router();

const { createTask, getToDoTasks, getInProgressTasks, getFinishedTasks, deleteTask, updateTaskToToDo, updateTaskToInProgress, updateTaskToFinished } = require('../controllers/tasksController.js');

tasksRoutes.get('/getToDoTasks', getToDoTasks);
tasksRoutes.get('/getInProgressTasks', getInProgressTasks);
tasksRoutes.get('/getFinishedTasks', getFinishedTasks);
tasksRoutes.post('/createTask', createTask);
tasksRoutes.delete('/deleteTask/:id', deleteTask);
tasksRoutes.put('/moveTaskToToDo/:id', updateTaskToToDo);
tasksRoutes.put('/moveTaskToInprogress/:id', updateTaskToInProgress);
tasksRoutes.put('/moveTaskToFinished/:id', updateTaskToFinished);

module.exports = tasksRoutes;