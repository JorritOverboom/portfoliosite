
import './ToDoList.css';
import Task from './Task.jsx';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDoTask, removeToDoTask, fetchInitialToDoState } from './task-slices/toDoListSlice.js';
import { addInProgressTask, removeInProgressTask } from './task-slices/inProgressListSlice.js';
import { addFinishedTask, removeFinishedTask } from './task-slices/finishedListSlice.js';

const ToDoList = () => {

    const dispatch = useDispatch();

    const toDoList = useSelector((state) => state.toDoList.tasks);
    const inProgressList = useSelector((state) => state.inProgressList.tasks);
    const finishedList = useSelector((state) => state.finishedList.tasks);

    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');
    const [ taskId, setTaskId ] = useState(0);

    useEffect(() => {
        dispatch(fetchInitialToDoState());
    }, []);


    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

    const submitTask = (event) => {
        event.preventDefault();
        if (taskName.length >= 1 && taskDescription.length >= 1){
            dispatch(addToDoTask({
                taskId: taskId,
                taskName: taskName,
                taskDescription: taskDescription,
                id: taskId
            }));
        }
        setTaskId((prevId) => prevId +1);
        setTaskName('');
        setTaskDescription('');
    };

    const deleteTaskFromToDo = (id) => {
        dispatch(removeToDoTask({id: id}));
    };

    const deleteTaskFromInProgress = (id) => {
        dispatch(removeInProgressTask({id: id}));
    };

    const deleteTaskFromFinished = (id) => {
        dispatch(removeFinishedTask({id: id}));
    };

    const moveTaskToToDo = (task) => {
        dispatch(addToDoTask(task));
        dispatch(removeInProgressTask({id: task.id}));
        dispatch(removeFinishedTask({id: task.id}));
    };

    const moveTaskToInProgress = (task) => {
        dispatch(addInProgressTask(task));
        dispatch(removeToDoTask({id: task.id}));
        dispatch(removeFinishedTask({id: task.id}));
    };

    const moveTaskToFinished = (task) => {
        dispatch(addFinishedTask(task));
        dispatch(removeToDoTask({id: task.id}));
        dispatch(removeInProgressTask({id: task.id}));
    };


    return (
        
        <div className='to-do-list'>
            <div className='add-task'>
                <h2>Make a Task</h2>
                <form className='task-input' onSubmit={submitTask}>
                    <label htmlFor='task-name'>Task name</label>
                    <input type='text' id='task-name' required minlength='1' onChange={taskNameSetter} value={taskName}></input>
                    <label htmlFor='task-description'>Task description</label>
                    <textarea id='task-description' required minlength='1' onChange={taskDescriptionSetter} value={taskDescription}></textarea>
                    <input className='add-task-button' type='submit' value='Add task' id='add-task-submit'></input>
                </form>
            </div>
            <div className='tasks'>
                <div className='to-do'>
                    <h2>To do tasks</h2>
                    <div className='task-list'>
                        {toDoList.map((task) => (
                            <Task
                                key={task.taskId}
                                name={task.taskName}
                                description={task.taskDescription}
                                removeTaskFromToDo={() => deleteTaskFromToDo(task.id)}
                                moveTaskToInProgress={() => moveTaskToInProgress(task)}
                                moveTaskToFinished={() => moveTaskToFinished(task)}
                            />
                        ))}
                    </div>
                </div>
                <div className='in-progress'>
                    <h2>In progress tasks</h2>
                    <div className='task-list'>
                        {inProgressList.map((task) => (
                            <Task
                                key={task.taskId}
                                name={task.taskName}
                                description={task.taskDescription}
                                removeTaskFromToDo={() => deleteTaskFromInProgress(task.id)}
                                moveTaskToToDo={() => moveTaskToToDo(task)}
                                moveTaskToFinished={() => moveTaskToFinished(task)}
                            />
                        ))}
                    </div>
                </div>
                <div className='finished'>
                    <h2>Finished tasks</h2>
                    <div className='task-list'>
                        {finishedList.map((task) => (
                            <Task
                                key={task.taskId}
                                name={task.taskName}
                                description={task.taskDescription}
                                removeTaskFromToDo={() => deleteTaskFromFinished(task.id)}
                                moveTaskToToDo={() => moveTaskToToDo(task)}
                                moveTaskToInProgress={() => moveTaskToInProgress(task)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='save-list'>
                <button>Save list</button>
            </div>
            
        </div>
    )
}

export default ToDoList;