
import './Signup.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/usersAPI';

const Signup = () => {

    const navigate = useNavigate();

    const [ username, setUsername ] = useState('');
    const [ confirmUsername, setConfirmUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const [ usernamesMatch, setUsernamesMatch ] = useState(null);
    const [ usernameAllLetters, setUsernameAllLetters ] = useState(null);
    const [ usernameHasThreeCharacters, setUsernameHasThreeCharacters ] = useState(null);
    const [ passwordsMatch, setPasswordsMatch ] = useState(null);
    const [ passwordHasEightCharacters, setPasswordHasEightCharacters ] = useState(null);
    const [ passwordHasOneCapitalLetter, setPasswordHasOneCapitalLetter ] = useState(null);
    const [ passwordHasOneSymbol, setPasswordHasOneSymbol ] = useState(null);

    const usernameSetter = ({target}) => {
        setUsername(target.value);
    };

    const confirmUsernameSetter = ({target}) => {
        setConfirmUsername(target.value);
    };

    const passwordSetter = ({target}) => {
        setPassword(target.value);
    };

    const confirmPasswordSetter = ({target}) => {
        setConfirmPassword(target.value);
    };

    useEffect(() => {
        setUsernamesMatch(username === confirmUsername && username.length > 0);
        setUsernameAllLetters(/^[a-zA-Z]*$/.test(username) && username.length > 0);
        setUsernameHasThreeCharacters(username.length >= 3);
        setPasswordsMatch(password === confirmPassword && password.length > 0);
        setPasswordHasEightCharacters(password.length >= 8);
        setPasswordHasOneCapitalLetter(/[A-Z]/.test(password));
        setPasswordHasOneSymbol(/[!@#$%^&*]/.test(password));
    }, [username, confirmUsername, password, confirmPassword]);

    const checkIfSubmitIsValid = () => {
        return usernamesMatch && usernameAllLetters && usernameHasThreeCharacters && passwordsMatch && passwordHasEightCharacters && passwordHasOneCapitalLetter && passwordHasOneSymbol;
    };

    const submitUser = async (event) => {
        event.preventDefault();
        if (checkIfSubmitIsValid()) {
            try {
                const newUser = { username, password };
                const response = await createUser(newUser);
                console.log(response);
                if (response.ok) {
                    alert('Account created!');
                    navigate('/login');
                    return;
                }

                if (response.message === 'Username already exists') {
                    alert('Username already exists');
                    return;
                }

                alert('Error creating account');
                return;
            }
            catch (error) {
                console.log(error);
                alert('Error creating account');
            }
        }
    };

    return (
        <div className='sign-up'>
            <form className='sign-up-form' onSubmit={submitUser}>
                <h2>Sign up</h2>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' onChange={usernameSetter} value={username} required />
                <label htmlFor='username-confirm'>Confirm username</label>
                <input type='text' id='username-confirm' name='username-confirm' onChange={confirmUsernameSetter} value={confirmUsername} required />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' onChange={passwordSetter} value={password} required />
                <label htmlFor='password-confirm'>Confirm password</label>
                <input type='password' id='password-confirm' name='password-confirm' onChange={confirmPasswordSetter} value={confirmPassword} required />
                <input type='submit' id='sign-up-submit' value='Sign up' />
            </form>
            <ul>
                <li className={usernamesMatch ? 'green' : 'red'}>Username and Confirm Username have to match</li>
                <li className={usernameAllLetters ? 'green' : 'red'}>Usernames only allow alphabet letters</li>
                <li className={usernameHasThreeCharacters ? 'green' : 'red'}>Usernames need at least 3 characters</li>
                <li className={passwordsMatch ? 'green' : 'red'}>Password and Confirm Password have to match</li>
                <li className={passwordHasEightCharacters ? 'green' : 'red'}>Passwords need at least 8 characters</li>
                <li className={passwordHasOneCapitalLetter ? 'green' : 'red'}>Passwords need at least 1 capital letter</li>
                <li className={passwordHasOneSymbol ? 'green' : 'red'}>Passwords need at least 1 symbol</li>
            </ul>
        </div>
    )
}

export default Signup;