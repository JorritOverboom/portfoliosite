
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='log-in'>
            <form className='log-in-form'>
                <h2>Log in</h2>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' required />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
                <input type='submit' id='log-in-submit' value='Log in' />
            </form>
            <p>If you have no account, <Link to='/sign-up' className='sign-up-link'>sign up</Link></p>
        </div>
    )
}

export default Login;