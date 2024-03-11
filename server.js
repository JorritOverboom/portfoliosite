const express = require('express');
const cors = require('cors');
require('dotenv').config();
const tasksRoutes = require('./routes/tasksRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/api/tasks', tasksRoutes);
app.use('/api/users', usersRoutes);
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});