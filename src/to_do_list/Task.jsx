
import DOMPurify from 'dompurify';
import to_do_icon from './images/waiting_icon.png';
import in_progress_icon from './images/in_progress_icon.png';
import finished_icon from './images/finished_icon.png';
import delete_icon from './images/delete_icon.png'
import { useSelector } from 'react-redux';

function Task(props) {

    const isDark = useSelector((state) => state.darkMode.darkMode);
    
    // Sanitizing the input
    const sanitizedName = DOMPurify.sanitize(props.name);
    const sanizitedDescription = DOMPurify.sanitize(props.description);
    
    return (
        <div className={`task border-2 rounded-3xl py-2 px-5 shadow-md ${isDark ? `bg-gray-400 shadow-white/70` : `bg-white shadow-black/30`}`}>
            <div className='task-text' key={props.id}>
                <h4 className='text-xl my-5' dangerouslySetInnerHTML={{__html: sanitizedName}}></h4>
                <p dangerouslySetInnerHTML={{__html: sanizitedDescription}}></p>
            </div>
            <div className='task-buttons mt-5 flex flex-row justify-between'>
                <div className='task-button flex cursor-pointer items-center' onClick={props.removeTaskFromToDo}>
                    <img className='w-5' src={delete_icon} alt='delete icon'></img>
                    <p className='task-button-description text-xs ml-px'>Delete</p>
                </div>
                <div className='task-button move-to-to-do flex cursor-pointer items-center' onClick={props.moveTaskToToDo}>
                    <img className='w-5' src={to_do_icon} alt='move to to do icon'></img>
                    <p className='task-button-description text-xs ml-px'>Move to to do</p>
                </div>
                <div className='task-button move-to-in-progress flex cursor-pointer items-center' onClick={props.moveTaskToInProgress}>
                    <img className='w-5' src={in_progress_icon} alt='move to in progress icon'></img>
                    <p className='task-button-description text-xs ml-px'>Move to in progress</p>
                </div>
                <div className='task-button move-to-finished flex cursor-pointer items-center' onClick={props.moveTaskToFinished}>
                    <img className='w-5' src={finished_icon} alt='move to finished icon'></img>
                    <p className='task-button-description text-xs ml-px'>Move to finished</p>
                </div>
            </div>
        </div>
    );
}

export default Task;