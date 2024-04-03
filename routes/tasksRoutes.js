// pull request example
// Routing and middleware for tasks
const express = require('express');
const tasksRoutes = express.Router();
const { validationResult } = require('express-validator');
const { body, param } = require('express-validator');
const { getTasks, createTask, deleteTask, updateTask } = require('../controllers/tasksController.js');

// Validating the input of the task that is created
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

// Validating the id input when trying to delete or move a task
const idValidation = [
    param('id').isUUID(),
    (req, res, next) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validating the status when moving a task
const statusValidation = [
    body('status').isIn(['todo', 'inprogress', 'finished']),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]

// Routing for tasks that modify the database
tasksRoutes.get('/getTasks', getTasks);
tasksRoutes.post('/createTask', createTaskValidation, createTask);
tasksRoutes.delete('/deleteTask/:id', idValidation, deleteTask);
tasksRoutes.put('/moveTask/:id', idValidation, statusValidation, updateTask);

module.exports = tasksRoutes;