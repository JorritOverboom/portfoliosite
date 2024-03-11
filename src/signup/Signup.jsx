
import './Signup.css';
import { useState } from 'react';

const Signup = () => {

    const submitUser = (event) => {
        // event.preventDefault();
        // if (userName.length >= 1 && password.length >= 1){
        //     dispatch(createUser({
        //         username: userName,
        //         password: password
        //     }));
        // }
        // setUsername('');
        // setPassword('');
    };

    return (
        <div className='sign-up'>
            <form className='sign-up-form' onSubmit={submitUser}>
                <h2>Sign up</h2>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' required />
                <label htmlFor='username-confirm'>Confirm username</label>
                <input type='text' id='username-confirm' name='username-confirm' required />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
                <label htmlFor='password-confirm'>Confirm password</label>
                <input type='password' id='password-confirm' name='password-confirm' required />
                <input type='submit' id='sign-up-submit' value='Sign up' />
            </form>
        </div>
    )
}

export default Signup;