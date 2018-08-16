import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
    return (
        <div className='loginWrapper'>
            <form className='loginForm' onSubmit={props.handleSubmit} autoComplete='off'>
                <img className='goalPic' src={require('../Signup/goal.png')} />
                <h3 className='loginHeading'>Log in</h3>
                <input className='loginInputs'
                       onChange={props.handleChange}
                       value={props.username}
                       name='username'
                       type='text'
                       placeholder='Username'
                       autoComplete='off' />
                <input className='loginInputs'
                       onChange={props.handleChange}
                       value={props.password}
                       name='password'
                       type='password'
                       placeholder='Password'
                       autoComplete='off' />
                <button className='loginBtn' type='submit'>Submit</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default LoginForm;
