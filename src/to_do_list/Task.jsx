
import DOMPurify from 'dompurify';
import to_do_icon from './images/waiting_icon.png';
import in_progress_icon from './images/in_progress_icon.png';
import finished_icon from './images/finished_icon.png';
import delete_icon from './images/delete_icon.png'

function Task(props) {
    
    // Sanitizing the input
    const sanitizedName = DOMPurify.sanitize(props.name);
    const sanizitedDescription = DOMPurify.sanitize(props.description);
    
    return (
        <div className='task'>
            <div className='task-text' key={props.id}>
                <h4 dangerouslySetInnerHTML={{__html: sanitizedName}}></h4>
                <p dangerouslySetInnerHTML={{__html: sanizitedDescription}}></p>
            </div>
            <div className='task-buttons'>
                <div className='task-button'>
                    <img src={delete_icon} onClick={props.removeTaskFromToDo}></img>
                    <p className='task-button-description'>Delete</p>
                </div>
                <div className='task-button move-to-to-do'>
                    <img src={to_do_icon} onClick={props.moveTaskToToDo}></img>
                    <p className='task-button-description'>Move to to do</p>
                </div>
                <div className='task-button move-to-in-progress'>
                    <img src={in_progress_icon} onClick={props.moveTaskToInProgress}></img>
                    <p className='task-button-description'>Move to in progress</p>
                </div>
                <div className='task-button move-to-finished'>
                    <img src={finished_icon} onClick={props.moveTaskToFinished}></img>
                    <p className='task-button-description'>Move to finished</p>
                </div>
            </div>
        </div>
    );
}

export default Task;