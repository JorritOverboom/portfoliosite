
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <p>Hi there! My name is Jorrit, and I am passionate about code and travel.</p>
            <p>Learn more about <Link to='/skills' className='home-link'>my skills</Link>, try my <Link to='/to-do-list' className='home-link'>demo</Link> or have a look at <Link to='/travel' className='home-link'>my travels</Link>.</p>
        </div>
    )
}

export default Home;