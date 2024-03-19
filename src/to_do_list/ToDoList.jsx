
import './ToDoList.css';
import Task from './Task.jsx';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTaskToToDo, removeTaskFromToDo, createNewTask, moveTaskToInProgressFromToDo, moveTaskToFinishedFromToDo } from './task-slices/toDoListSlice.js';
import { addTaskToInProgress, removeTaskFromInProgress, moveTaskToToDoFromInProgress, moveTaskToFinishedFromInProgress } from './task-slices/inProgressListSlice.js';
import { addTaskToFinished, removeTaskFromFinished, moveTaskToToDoFromFinished, moveTaskToInProgressFromFinished } from './task-slices/finishedListSlice.js';
import { getToDoTasksFromDataBase } from '../to_do_list/task-slices/toDoListSlice.js';
import { getInProgressTasksFromDataBase } from '../to_do_list/task-slices/inProgressListSlice.js';
import { getFinishedTasksFromDataBase } from '../to_do_list/task-slices/finishedListSlice.js';
import { logoutUser } from '../utils/usersAPI';
import { useNavigate } from 'react-router-dom';

const ToDoList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const toDoList = useSelector((state) => state.toDoList.tasks);
    const inProgressList = useSelector((state) => state.inProgressList.tasks);
    const finishedList = useSelector((state) => state.finishedList.tasks);

    useEffect(() => {
        dispatch(getToDoTasksFromDataBase());
        dispatch(getInProgressTasksFromDataBase());
        dispatch(getFinishedTasksFromDataBase());
    }, []);

    const logout = async () => {
        await logoutUser()
        navigate('/login')
    }

    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');

    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

    const submitTask = (event) => {
        event.preventDefault();
        if (taskName.length >= 1 && taskDescription.length >= 1){
            const formattedDescription = taskDescription.replace(/\n/g, '<br>');
            dispatch(createNewTask({
                id: uuidv4(),
                name: taskName,
                description: formattedDescription,
                status: 'todo'
            }));
            setTaskName('');
            setTaskDescription('');
        }
    };

    const deleteTaskFromToDo = (id) => {
        dispatch(removeTaskFromToDo(id));
    };

    const deleteTaskFromInProgress = (id) => {
        dispatch(removeTaskFromInProgress(id));
    };

    const deleteTaskFromFinished = (id) => {
        dispatch(removeTaskFromFinished(id));
    };

    const moveTaskFromToDoToInProgress = (id) => {
        dispatch(moveTaskToInProgressFromToDo(id));
        dispatch(addTaskToInProgress(toDoList.find(task => task.id === id)));
    };

    const moveTaskFromToDoToFinished = (id) => {
        dispatch(moveTaskToFinishedFromToDo(id));
        dispatch(addTaskToFinished(toDoList.find(task => task.id === id)));
    };

    const moveTaskFromInProgressToToDo = (id) => {
        dispatch(moveTaskToToDoFromInProgress(id));
        dispatch(addTaskToToDo(inProgressList.find(task => task.id === id)));
    };

    const moveTaskFromInProgressToFinished = (id) => {
        dispatch(moveTaskToFinishedFromInProgress(id));
        dispatch(addTaskToFinished(inProgressList.find(task => task.id === id)));
    };

    const moveTaskFromFinishedToToDo = (id) => {
        dispatch(moveTaskToToDoFromFinished(id));
        dispatch(addTaskToToDo(finishedList.find(task => task.id === id)));
    };

    const moveTaskFromFinishedToInProgress = (id) => { 
        dispatch(moveTaskToInProgressFromFinished(id));
        dispatch(addTaskToInProgress(finishedList.find(task => task.id === id)));
    };

    return (
        <div className='to-do-list'>
            <div className='logout-container'>
                <button onClick={logout}>Logout</button>
            </div>
            <div className='add-task'>
                <h2>Add a Task</h2>
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
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTaskFromToDo(task.id)}
                                moveTaskToInProgress={() => moveTaskFromToDoToInProgress(task.id)}
                                moveTaskToFinished={() => moveTaskFromToDoToFinished(task.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className='in-progress'>
                    <h2>In progress tasks</h2>
                    <div className='task-list'>
                        {inProgressList.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTaskFromInProgress(task.id)}
                                moveTaskToToDo={() => moveTaskFromInProgressToToDo(task.id)}
                                moveTaskToFinished={() => moveTaskFromInProgressToFinished(task.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className='finished'>
                    <h2>Finished tasks</h2>
                    <div className='task-list'>
                        {finishedList.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTaskFromFinished(task.id)}
                                moveTaskToToDo={() => moveTaskFromFinishedToToDo(task.id)}
                                moveTaskToInProgress={() => moveTaskFromFinishedToInProgress(task.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;