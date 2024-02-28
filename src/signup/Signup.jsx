
import './Signup.css';

const Signup = () => {
    return (
        <div className='sign-up'>
            <form className='sign-up-form'>
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