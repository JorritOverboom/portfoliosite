
const express = require('express');
const tasksRoutes = express.Router();
const { validationResult } = require('express-validator');
const { createTask, getToDoTasks, getInProgressTasks, getFinishedTasks, deleteTask, updateTaskToToDo, updateTaskToInProgress, updateTaskToFinished } = require('../controllers/tasksController.js');

const { body, param } = require('express-validator');

const createTaskValidation = [
    body('id').isUUID(),
    body('name').notEmpty().trim(),
    body('description').notEmpty().trim(),
    (req, res, next) => {
        const errors = validationResult(req);
        if( !errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const idValidation = [
    param('id').isUUID(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

tasksRoutes.get('/getToDoTasks', getToDoTasks);
tasksRoutes.get('/getInProgressTasks', getInProgressTasks);
tasksRoutes.get('/getFinishedTasks', getFinishedTasks);
tasksRoutes.post('/createTask', createTaskValidation, createTask);
tasksRoutes.delete('/deleteTask/:id', idValidation, deleteTask);
tasksRoutes.put('/moveTaskToToDo/:id', idValidation, updateTaskToToDo);
tasksRoutes.put('/moveTaskToInprogress/:id', idValidation, updateTaskToInProgress);
tasksRoutes.put('/moveTaskToFinished/:id', idValidation, updateTaskToFinished);

module.exports = tasksRoutes;