import React from 'react';
import './SignupForm.css';

function SignupForm(props) {
    return (
        <div className='signupWrapper'>
            <form className='signupForm' onSubmit={props.handleSubmit} autoComplete='off'>
                <img className='goalPic' src={require('./goal.png')} />
                <h3 className='signupHeading'>Sign up</h3>
                <input className='signupInputs'
                       onChange={props.handleChange}
                       value={props.username}
                       name='username'
                       type='text'
                       placeholder='Username'
                       autoComplete='off' />
                <input className='signupInputs'
                       onChange={props.handleChange}
                       value={props.password}
                       name='password'
                       type='password'
                       placeholder='Password'
                       autoComplete='off' />
                <button className='signupBtn' type='submit'>Create Account</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default SignupForm;