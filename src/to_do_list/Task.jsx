
import to_do_icon from './images/waiting_icon.png';
import in_progress_icon from './images/in_progress_icon.png';
import finished_icon from './images/finished_icon.png';
import delete_icon from './images/delete_icon.png'

function Task(props) {
    return (
        <div className='task'>
            <div className='task-text' key={props.id}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className='task-buttons'>
                <img src={delete_icon} onClick={props.deleteTaskFromToDoList} title="Delete this task"></img>
                <img className='move-to-to-do' src={to_do_icon} onClick={props.moveTaskToToDoList} title='Move this task to the to do list'></img>
                <img className='move-to-in-progress' src={in_progress_icon} onClick={props.moveTaskToInProgressList} title='Move this task to the in progress list'></img>
                <img className='move-to-finished' src={finished_icon} onClick={props.moveTaskToFinishedList} title='Move this task to the finished list'></img>
            </div>
        </div>
    );
}

export default Task;