
import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../APIs/usersAPI';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../login/loginSlice';

const Login = () => {

    // React hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const usernameSetter = ({target}) => {
        setUsername(target.value);
    };

    const passwordSetter = ({target}) => {
        setPassword(target.value);
    };

    // Toastify create messages
    const notifySuccess = () => toast.success('Log in successful');
    const notifyFailure = () => toast.error('Failed to log in. Please try again');
    const notifyInputFailure = () => toast.error('Invalid username or password');

    // Submitting the login
    const submitLogin = async (event) => {
        event.preventDefault();

        // Checking for valid input of the username and password
        const checkIfValidInput = () => {
            const usernameAllLetters = /^[a-zA-Z]+$/.test(username);
            const usernameHasThreeCharacters = username.length >= 3;
            const passwordHasEightCharacters = password.length >= 8;
            const passwordHasOneCapitalLetter = /[A-Z]/.test(password);
            const passwordHasOneNumber = /\d/.test(password);
            const passwordHasOneSymbol = /[!@#$%^&*]/.test(password);

            return (
                usernameAllLetters &&
                usernameHasThreeCharacters &&
                passwordHasEightCharacters &&
                passwordHasOneCapitalLetter &&
                passwordHasOneNumber &&
                passwordHasOneSymbol
            );
        };

        if (!checkIfValidInput()) {
            notifyInputFailure();
            return;
        }

        // If input is valid, continuing with logging in
        try {
            const result = await loginUser({ username, password });

            if (result.message) {
                const notifyMessage = () => toast.error(result.message);
                console.log('submitLogin has a message:', result.message)
                notifyMessage();
                return;
            }

            // Short delay to display that the login was successful
            if (result.ok) {
                dispatch(login());
                notifySuccess();
                setTimeout(() => {
                    navigate('/to-do-list');
                }, 1000);
            } 

        } catch (error) {
            console.log(error);
            notifyFailure();
        }
    };

    return (
        <div className='log-in'>
            <ToastContainer hideProgressBar={true}/>
            <form className='log-in-form' onSubmit={submitLogin} >
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