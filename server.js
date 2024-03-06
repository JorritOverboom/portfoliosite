const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/portfoliosite.js');

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(cors());
app.use('/api', router);
app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});