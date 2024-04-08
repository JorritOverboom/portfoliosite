
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

    return (
        <div className='not-found'>
            <p>Oops! The page you're looking for doesn't exist. Go back <Link to='/'>home</Link>.</p>
        </div>
    )
}

export default NotFound;