
import { Link } from 'react-router-dom';
// import './NotFound.css';

const NotFound = () => {

    return (
        <div className='flex text-center items-center h-screen'>
            <p>Oops! The page you're looking for doesn't exist. Go back <Link to='/'>home</Link>.</p>
        </div>
    )
}

export default NotFound;