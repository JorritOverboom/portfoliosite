
import './ToDoList.css';
import Task from './Task.jsx';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToDoTasksFromDataBase, getToDoTasksFromState, removeTaskFromToDo, createNewTask, moveTaskToInProgressFromToDo, moveTaskToFinishedFromToDo } from './task-slices/toDoListSlice.js';
import { getInProgressTasksFromDataBase, getInProgressTasksFromState, removeTaskFromInProgress, moveTaskToToDoFromInProgress, moveTaskToFinishedFromInProgress } from './task-slices/inProgressListSlice.js';
import { getFinishedTasksFromDataBase, getFinishedTasksFromState, removeTaskFromFinished, moveTaskToToDoFromFinished, moveTaskToInProgressFromFinished } from './task-slices/finishedListSlice.js';

const ToDoList = () => {

    const dispatch = useDispatch();

    const toDoList = useSelector((state) => state.toDoList.tasks);
    const inProgressList = useSelector((state) => state.inProgressList.tasks);
    const finishedList = useSelector((state) => state.finishedList.tasks);
    const refreshToDoList = useSelector((state) => state.toDoList.status);
    const refreshInProgressList = useSelector((state) => state.inProgressList.status);
    const refreshFinishedList = useSelector((state) => state.finishedList.status);

    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');

    useEffect(() => {
        dispatch(getToDoTasksFromDataBase());
        dispatch(getInProgressTasksFromDataBase());
        dispatch(getFinishedTasksFromDataBase());
    }, []);

    useEffect(() => {
        if (refreshToDoList === 'succeeded'){
            dispatch(getToDoTasksFromDataBase());
        }
    });

    useEffect(() => {
        if (refreshInProgressList === 'succeeded'){
            dispatch(getInProgressTasksFromDataBase());
        }
    });

    useEffect(() => {
        if (refreshFinishedList === 'succeeded'){
            dispatch(getFinishedTasksFromDataBase());
        }
    });


    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

    const submitTask = (event) => {
        event.preventDefault();
        if (taskName.length >= 1 && taskDescription.length >= 1){
            dispatch(createNewTask({
                name: taskName,
                description: taskDescription,
                status: 'todo'
            }));
        }
        setTaskName('');
        setTaskDescription('');
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
    };

    const moveTaskFromToDoToFinished = (id) => {
        dispatch(moveTaskToFinishedFromToDo(id));
    };

    const moveTaskFromInProgressToToDo = (id) => {
        dispatch(moveTaskToToDoFromInProgress(id));
    };

    const moveTaskFromInProgressToFinished = (id) => {
        dispatch(moveTaskToFinishedFromInProgress(id));
    };

    const moveTaskFromFinishedToToDo = (id) => {
        dispatch(moveTaskToToDoFromFinished(id));
    };

    const moveTaskFromFinishedToInProgress = (id) => { 
        dispatch(moveTaskToInProgressFromFinished(id));
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