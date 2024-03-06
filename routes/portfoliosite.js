const express = require('express');
const router = express.Router();

const { createToDo, getToDos, getInProgress, getFinished, deleteToDo, deleteInProgress, deleteFinished, moveToDoToInProgress, moveToDoToFinished, moveInProgressToToDo, moveInProgressToFinished, moveFinishedToToDo, moveFinishedToInProgress } = require('../controllers/index.js');

router.post('/createToDo', createToDo);
router.get('/gettodos', getToDos);
router.get('/getInProgress', getInProgress);
router.get('/getFinished', getFinished);
router.delete('/deleteToDo/:id', deleteToDo);
router.delete('/deleteInProgress/:id', deleteInProgress);
router.delete('/deleteFinished/:id', deleteFinished);
router.put('/moveToDoToInProgress/:id', moveToDoToInProgress);
router.put('/moveToDoToFinished/:id', moveToDoToFinished);
router.put('/moveInProgressToToDo/:id', moveInProgressToToDo);
router.put('/moveInProgressToFinished/:id', moveInProgressToFinished);
router.put('/moveFinishedToToDo/:id', moveFinishedToToDo);
router.put('/moveFinishedToInProgress/:id', moveFinishedToInProgress);

module.exports = router;