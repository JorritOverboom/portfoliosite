
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

    // Recurring components styling
    const buttonsDivStyling = 'flex cursor-pointer items-center';
    const imgStyling = 'sm:w-5 w-3';
    const pStyling = 'text-xs ml-px';
    
    return (
        <div className={`border-2 rounded-3xl py-2 mb-5 sm:px-5 px-2 shadow-md ${isDark ? `bg-gray-400 shadow-white/70` : `bg-white shadow-black/30`}`}>
            <div key={props.id}>
                <h4 className='text-xl sm:my-5 my-2' dangerouslySetInnerHTML={{__html: sanitizedName}}></h4>
                <p className='mb-2' dangerouslySetInnerHTML={{__html: sanizitedDescription}}></p>
            </div>
            <div className='tmt-5 flex flex-row justify-between'>
                <div className={`task-button ${buttonsDivStyling}`} onClick={props.removeTaskFromToDo}>
                    <img className={imgStyling} src={delete_icon} alt='delete icon'></img>
                    <p className={pStyling}>Delete</p>
                </div>
                <div className={`move-to-to-do ${buttonsDivStyling}`} onClick={props.moveTaskToToDo}>
                    <img className={imgStyling} src={to_do_icon} alt='move to to do icon'></img>
                    <p className={pStyling}>Move to to do</p>
                </div>
                <div className={`move-to-in-progress ${buttonsDivStyling}`} onClick={props.moveTaskToInProgress}>
                    <img className={imgStyling} src={in_progress_icon} alt='move to in progress icon'></img>
                    <p className={pStyling}>Move to in progress</p>
                </div>
                <div className={`move-to-finished ${buttonsDivStyling}`} onClick={props.moveTaskToFinished}>
                    <img className={imgStyling} src={finished_icon} alt='move to finished icon'></img>
                    <p className={pStyling}>Move to finished</p>
                </div>
            </div>
        </div>
    );
}

export default Task;