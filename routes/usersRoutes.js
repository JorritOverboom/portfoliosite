const express = require('express');
const usersRoutes = express.Router();

const { createUser } = require('../controllers/usersController');

usersRoutes.post('/createUser', createUser);

module.exports = usersRoutes;