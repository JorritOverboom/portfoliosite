
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../utils/usersAPI';

const Login = () => {

    const navigate = useNavigate();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const usernameSetter = ({target}) => {
        setUsername(target.value);
    };

    const passwordSetter = ({target}) => {
        setPassword(target.value);
    };

    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await loginUser({ username, password });

            if (result.message) {
                console.log('submitLogin has a message:', result.message)
                alert(result.message);
                return;
            }

            if (result.ok) {
                alert('Logged in successfully');
                navigate('/to-do-list');
            } 

        } catch (error) {
            console.log(error);
            alert('Failed to log in. Please try again');
        }
    };

    return (
        <div className='log-in'>
            <form className='log-in-form' onSubmit={submitLogin}>
                <h2>Log in</h2>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' onChange={ usernameSetter } value={username} required />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' onChange={ passwordSetter } value={password} required />
                <input type='submit' id='log-in-submit' value='Log in' />
            </form>
            <p>If you have no account, <Link to='/sign-up' className='sign-up-link'>sign up</Link></p>
        </div>
    )
}

export default Login;