
// import './Signup.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../APIs/usersAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    // React hooks
    const navigate = useNavigate();
    const isDark = useSelector((state) => state.darkMode.darkMode);

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ usernameAllLetters, setUsernameAllLetters ] = useState(null);
    const [ usernameHasThreeCharacters, setUsernameHasThreeCharacters ] = useState(null);
    const [ passwordHasEightCharacters, setPasswordHasEightCharacters ] = useState(null);
    const [ passwordHasOneCapitalLetter, setPasswordHasOneCapitalLetter ] = useState(null);
    const [ passwordHasOneNumber, setPasswordHasOneNumber ] = useState(null);
    const [ passwordHasOneSymbol, setPasswordHasOneSymbol ] = useState(null);
    const [ passwordsMatch, setPasswordsMatch ] = useState(null);

    const usernameSetter = ({target}) => {
        setUsername(target.value);
    };

    const passwordSetter = ({target}) => {
        setPassword(target.value);
    };

    const confirmPasswordSetter = ({target}) => {
        setConfirmPassword(target.value);
    };

    // Checking for valid username and password input
    useEffect(() => {
        setUsernameAllLetters(/^[a-zA-Z]+$/.test(username) && username.length > 0);
        setUsernameHasThreeCharacters(username.length >= 3);
        setPasswordHasEightCharacters(password.length >= 8);
        setPasswordHasOneCapitalLetter(/[A-Z]/.test(password));
        setPasswordHasOneNumber(/\d/.test(password));
        setPasswordHasOneSymbol(/[!@#$%^&*]/.test(password));
        setPasswordsMatch(password === confirmPassword && password.length > 0);
    }, [username, password, confirmPassword]);

    const checkIfSubmitIsValid = () => {
        return (
            usernameAllLetters && 
            usernameHasThreeCharacters && 
            passwordHasEightCharacters && 
            passwordHasOneCapitalLetter && 
            passwordHasOneNumber &&
            passwordHasOneSymbol && 
            passwordsMatch
        );
    };

    // Toastify creating messages
    const notifySuccess = () => toast.success('Account created');
    const notifyUsernameExists = () => toast.error('Username already exists');
    const notifyFailure = () => toast.error('Error creating account');

    // Submitting the user to the database
    const submitUser = async (event) => {
        event.preventDefault();
        if (checkIfSubmitIsValid()) {
            try {
                const newUser = { username, password };
                const response = await createUser(newUser);
                
                // Short delay to display the login attempt was successful
                console.log(response);
                if (response.ok) {
                    notifySuccess();
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
                }

                if (response.message === 'Username already exists') {
                    notifyUsernameExists();
                    return;
                }

                return;
            }
            catch (error) {
                console.log(error);
                notifyFailure();
            }
        }
    };

    // Recurring components styling
    const inputStyling = 'text-black p-px border-black border';
    const greenStyling = 'text-green-500';
    const redStyling = 'text-red-500';

    return (
        <div className='sign-up mb-40'>
            <ToastContainer hideProgressBar={true}/>
            <form className='sign-up-form mb-10 flex flex-col' onSubmit={submitUser}>
                <h2 className='self-center'>Sign up</h2>
                <label htmlFor='username'>Username</label>
                <input className={inputStyling} type='text' id='username' name='username' onChange={usernameSetter} value={username} required />
                <label htmlFor='password'>Password</label>
                <input className={inputStyling} type='password' id='password' name='password' onChange={passwordSetter} value={password} required />
                <label htmlFor='password-confirm'>Confirm password</label>
                <input className={inputStyling} type='password' id='password-confirm' name='password-confirm' onChange={confirmPasswordSetter} value={confirmPassword} required />
                <input className={`${isDark ? `border-white bg-gray-500` : `border-black bg-gray-200`} mt-10 border w-24 self-center`} type='submit' id='sign-up-submit' value='Sign up' />
            </form>
            <ul>
                <li className={usernameAllLetters ? `${greenStyling}` : `${redStyling}`}>Username: Must contain only alphabet letters</li>
                <li className={usernameHasThreeCharacters ? `${greenStyling}` : `${redStyling}`}>Username: Must be at least 3 characters long</li>
                <li className={passwordHasEightCharacters ? `${greenStyling}` : `${redStyling}`}>Password: Must be at least 8 characters long</li>
                <li className={passwordHasOneCapitalLetter ? `${greenStyling}` : `${redStyling}`}>Password: Must contain at least 1 capital letter</li>
                <li className={passwordHasOneNumber ? `${greenStyling}` : `${redStyling}`}>Password: Must contain at least 1 number</li>
                <li className={passwordHasOneSymbol ? `${greenStyling}` : `${redStyling}`}>Password: Must contain at least 1 symbol</li>
                <li className={passwordsMatch ? `${greenStyling}` : `${redStyling}`}>Password and Confirm Password: Must match</li>
            </ul>
        </div>
    )
}

export default Signup;