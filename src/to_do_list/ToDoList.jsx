
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
    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');
    const isDark = useSelector((state) => state.darkMode.darkMode);

    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

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

    return (
        <div className='to-do-list'>
            <ToastContainer hideProgressBar={true}/>
            <div className='add-task flex flex-col items-center'>
                <h2>Create a Task</h2>
                <form className='task-input flex flex-col sm:w-1/5 w-4/5' onSubmit={submitTask}>
                    <label htmlFor='task-name'>Task name</label>
                    <input className={`text-black p-px w-full mb-5 border ${isDark ? `border-white` : `border-black`}`} type='text' id='task-name' required minlength='1' onChange={taskNameSetter} value={taskName}></input>
                    <label htmlFor='task-description'>Task description</label>
                    <textarea className={`text-black p-px w-full h-28 mb-5 border resize-none ${isDark ? `border-white` : `border-black`}`} id='task-description' required minlength='1' onChange={taskDescriptionSetter} value={taskDescription}></textarea>
                    <input className={`add-task-button border cursor-pointer mb-10 ${isDark ? `bg-gray-500` : `bg-gray-200`}`} type='submit' value='Add task' id='add-task-submit'></input>
                </form>
            </div>
            <div className='tasks sm:grid grid-cols-3 flex-col '>
                <div className='to-do sm:min-w-96 mx-5 mb-5'>
                    <h3 className={`border-b mb-5 ${isDark ? `border-white` : `border-black`}`} >To do</h3>
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
                <div className='in-progress sm:min-w-96 mx-5 mb-5'>
                    <h3 className={`border-b mb-5 ${isDark ? `border-white` : `border-black`}`} >In progress</h3>
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
                <div className='finished sm:min-w-96 mx-5 mb-5'>
                    <h3 className={`border-b mb-5 ${isDark ? `border-white` : `border-black`}`} >Finished</h3>
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
            <div className='flex justify-center mt-20 mb-40'>
                <button className={`add-task-button border cursor-pointer mb-10 ${isDark ? `bg-gray-500` : `bg-gray-200`} w-24 text-2xl`} onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default ToDoList;