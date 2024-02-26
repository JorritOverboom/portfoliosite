
import { useState } from 'react';
import './ToDoList.css';
import Task from './Task.jsx';

const ToDoList = () => {

    const [ taskName, setTaskName ] = useState('');
    const [ taskDescription, setTaskDescription ] = useState('');
    const [ taskId, setTaskId ] = useState(0);

    const [ toDoList, setToDoList ] = useState([]);
    const [ inProgressList, setInProgressList ] = useState([]);
    const [ finishedList, setFinishedList ] = useState([]);



    const taskNameSetter = ({target}) => {
        setTaskName(target.value);
    };

    const taskDescriptionSetter = ({target}) => {
        setTaskDescription(target.value);
    };

    const submitTask = (event) => {
        event.preventDefault();
        if (taskName.length >= 1 && taskDescription.length >= 1){
            setToDoList((prev) => [
                ...prev,
                {
                    taskId: taskId,
                    taskName: taskName,
                    taskDescription: taskDescription
                }
            ]);
        }
        setTaskId((prevId) => prevId +1);
        setTaskName('');
        setTaskDescription('');
    };

    const moveTaskToToDoList = (task) => {
        if (!toDoList.some((toDoTask) => toDoTask.taskId === task.taskId)) {
            setToDoList((prev) => [
                ...prev,
                {
                    taskId: task.taskId,
                    taskName: task.taskName,
                    taskDescription: task.taskDescription
                }
            ]);

            setInProgressList((prev) =>
                prev.filter((inProgressTask) => inProgressTask.taskId !== task.taskId)
            );

            setFinishedList((prev) =>
                prev.filter((finishedTask) => finishedTask.taskId !== task.taskId)
            );
        }
    }

    const moveTaskToInProgressList = (task) => {
        if (!inProgressList.some((inProgressTask) => inProgressTask.taskId === task.taskId)) {
            setInProgressList((prev) => [
                ...prev,
                {
                    taskId: task.taskId,
                    taskName: task.taskName,
                    taskDescription: task.taskDescription
                }
            ]);

            setToDoList((prev) =>
                prev.filter((toDoTask) => toDoTask.taskId !== task.taskId)
            );

            setFinishedList((prev) =>
                prev.filter((finishedTask) => finishedTask.taskId !== task.taskId)
            );
        }
    };

    const moveTaskToFinishedList = (task) => {
        if (!finishedList.some((finishedTask) => finishedTask.taskId === task.taskId)) {
            setFinishedList((prev) => [
                ...prev,
                {
                    taskId: task.taskId,
                    taskName: task.taskName,
                    taskDescription: task.taskDescription
                }
            ]);

            setToDoList((prev) =>
                prev.filter((toDoTask) => toDoTask.taskId !== task.taskId)
            );

            setInProgressList((prev) =>
                prev.filter((inProgressTask) => inProgressTask.taskId !== task.taskId)
            );
        }
    }

    const deleteTaskFromToDoList = (taskId) => {
        setToDoList((prev) => 
            prev.filter((task) => task.taskId !== taskId)
        );
    };

    const deleteTaskFromInProgressList = (taskId) => {
        setInProgressList((prev) => 
            prev.filter((task) => task.taskId !== taskId)
        );
    };

    const deleteTaskFromFinishedList = (taskId) => {
        setFinishedList((prev) => 
            prev.filter((task) => task.taskId !== taskId)
        );
    };



    return (
        <div className='to-do-list'>
            <div className='add-task'>
                <h2>Make Task</h2>
                <form className='task-input' onSubmit={submitTask}>
                    <label for='task-name'>Task name</label>
                    <input type='text' id='task-name' required minlength='1' onChange={taskNameSetter} value={taskName}></input>
                    <label for='task-description'>Task description</label>
                    <textarea id='task-description' required minlength='1' onChange={taskDescriptionSetter} value={taskDescription}></textarea>
                    <input type='submit' value='Add task' id='submitTaskButton'></input>
                </form>
            </div>
            <div className='tasks'>
                <div className='to-do'>
                    <h2>To do tasks</h2>
                    {toDoList.map((task) => (
                        <Task
                            key={task.taskId}
                            name={task.taskName} 
                            description={task.taskDescription} 
                            deleteTaskFromToDoList={() => deleteTaskFromToDoList(task.taskId)}
                            moveTaskToToDoList={() => moveTaskToToDoList(task)}
                            moveTaskToInProgressList={() => moveTaskToInProgressList(task)}
                            moveTaskToFinishedList={() => moveTaskToFinishedList(task)}
                        />
                    ))}
                </div>
                <div className='in-progress'>
                    <h2>In progress tasks</h2>
                    {inProgressList.map((task) => (
                        <Task
                            key={task.taskId}
                            name={task.taskName} 
                            description={task.taskDescription} 
                            deleteTaskFromToDoList={() => deleteTaskFromInProgressList(task.taskId)}
                            moveTaskToToDoList={() => moveTaskToToDoList(task)}
                            moveTaskToInProgressList={() => moveTaskToInProgressList(task)}
                            moveTaskToFinishedList={() => moveTaskToFinishedList(task)}
                        />
                    ))}
                </div>
                <div className='finished'>
                    <h2>Finished tasks</h2>
                    {finishedList.map((task) => (
                        <Task
                            key={task.taskId}
                            name={task.taskName} 
                            description={task.taskDescription} 
                            deleteTaskFromToDoList={() => deleteTaskFromFinishedList(task.taskId)}
                            moveTaskToToDoList={() => moveTaskToToDoList(task)}
                            moveTaskToInProgressList={() => moveTaskToInProgressList(task)}
                            moveTaskToFinishedList={() => moveTaskToFinishedList(task)}
                        />
                    ))}
                </div>
            </div>
            <div className='save-list'>
                <button>Save list</button>
            </div>
            
        </div>
    )
}

export default ToDoList;