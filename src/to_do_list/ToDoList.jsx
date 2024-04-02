
import './ToDoList.css';
import Task from './Task.jsx';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { logout } from '../login/loginSlice.js';
import { addTask } from './tasksSlice.js';
import { getTasks, removeTask, moveTask } from './tasksSlice.js';
import { logoutUser } from '../APIs/usersAPI';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ToDoList = () => {

    // React hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loggedIn = useSelector((state) => state.login.loggedIn);
    const toDoList = useSelector((state) => state.tasks.tasks.filter(task => task.status === 'todo'));
    const inProgressList = useSelector((state) => state.tasks.tasks.filter(task => task.status === 'inprogress'));
    const finishedList = useSelector((state) => state.tasks.tasks.filter(task => task.status === 'finished'));

    // Getting the tasks from the database upon landing on this page
    useEffect(() => {
        dispatch(getTasks());
    }, []);

    // Checking if the user is logged in
    useEffect(() => {
        if (!loggedIn) {
            navigate('/login');
        };
    }, [loggedIn]);

    // Toastify create message
    const notifySuccess = () => toast.success('Log out successful');

    // logout button handler with time delay to give feedback that user is logged out
    const logoutHandler = async () => {
        const result = await logoutUser();

        // Short delay to display that logging out was successful
        if (result.ok) {
            notifySuccess();
            setTimeout(() => {
               dispatch(logout()); 
            }, 1500);
        }

        return;
    };

    // React hooks
    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');

    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

    // Create a task
    const submitTask = (event) => {
        event.preventDefault();
        if (taskName.length >= 1 && taskDescription.length >= 1){
            const formattedDescription = taskDescription.replace(/\n/g, '<br>');
            dispatch(addTask({
                    id: uuidv4(),
                    name: taskName,
                    description: formattedDescription,
            }));
            setTaskName('');
            setTaskDescription('');
        }
    };

    // Delete a task
    const deleteTask = (id) => {
        dispatch(removeTask(id));
    };

    // Move a task
    const changeStatusTask = (id, status) => {
        const task = {id, status};
        dispatch(moveTask(task));
    }

    return (
        <div className='to-do-list'>
            <ToastContainer hideProgressBar={true}/>
            <div className='add-task'>
                <h2>Create a Task</h2>
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
                    <h3>To do</h3>
                    <div className='task-list'>
                        {toDoList.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTask(task.id)}
                                moveTaskToInProgress={() => changeStatusTask(task.id, 'inprogress')}
                                moveTaskToFinished={() => changeStatusTask(task.id, 'finished')}
                            />
                        ))}
                    </div>
                </div>
                <div className='in-progress'>
                    <h3>In progress</h3>
                    <div className='task-list'>
                        {inProgressList.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTask(task.id)}
                                moveTaskToToDo={() => changeStatusTask(task.id, 'todo')}
                                moveTaskToFinished={() => changeStatusTask(task.id, 'finished')}
                            />
                        ))}
                    </div>
                </div>
                <div className='finished'>
                    <h3>Finished</h3>
                    <div className='task-list'>
                        {finishedList.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                removeTaskFromToDo={() => deleteTask(task.id)}
                                moveTaskToToDo={() => changeStatusTask(task.id, 'todo')}
                                moveTaskToInProgress={() => changeStatusTask(task.id, 'inprogress')}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='logout-container'>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default ToDoList;