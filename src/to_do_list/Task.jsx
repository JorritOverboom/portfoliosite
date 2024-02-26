
import to_do_icon from './Images/waiting_icon.png';
import in_progress_icon from './Images/in_progress_icon.png';
import finished_icon from './Images/finished_icon.png';
import delete_icon from './Images/delete_icon.png'

function Task(props) {
    return (
        <div className='task'>
            <div className='task-text' key={props.id}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className='task-buttons'>
                <img src={delete_icon} onClick={props.deleteTaskFromToDoList}></img>
                <img src={to_do_icon} onClick={props.moveTaskToToDoList}></img>
                <img src={in_progress_icon} onClick={props.moveTaskToInProgressList}></img>
                <img src={finished_icon} onClick={props.moveTaskToFinishedList}></img>
            </div>
        </div>
    );
}

export default Task;