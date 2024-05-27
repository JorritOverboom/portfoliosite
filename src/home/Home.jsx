
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='text-white'>
            <p className='mb-10'>Hi there! My name is Jorrit, and I am passionate about code and travel.</p>
            <p>Learn more about <Link className='underline' to='/skills' >my skills</Link>, try my <Link className='underline' to='/to-do-list' >demo</Link> or have a look at <Link className='underline' to='/travel' >my travels</Link>.</p>
        </div>
    )
}

export default Home;