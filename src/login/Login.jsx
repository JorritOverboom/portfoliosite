
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../utils/usersAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const notifySuccess = () => toast.success('Log in successful');
    const notifyFailure = () => toast.error('Failed to log in. Please try again');

    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await loginUser({ username, password });

            if (result.message) {
                const notifyMessage = () => toast.error(result.message);
                console.log('submitLogin has a message:', result.message)
                notifyMessage();
                return;
            }

            if (result.ok) {
                notifySuccess();
                setTimeout(() => {
                    navigate('/to-do-list');
                }, 1500);
            } 

        } catch (error) {
            console.log(error);
            notifyFailure();
        }
    };

    return (
        <div className='log-in'>
            <ToastContainer autoClose={2000} hideProgressBar={true}/>
            <form className='log-in-form' onSubmit={submitLogin}>
                <h2>Log in to get access to the to do list</h2>
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