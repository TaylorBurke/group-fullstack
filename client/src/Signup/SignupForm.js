import React from 'react'

function SignupForm(props) {
    return (
        <div className='signup-wrapper'>
            <form onSubmit={props.handleSubmit} autoComplete='off'>
                <h3>Sign up</h3>
                <input onChange={props.handleChange}
                       value={props.username}
                       name='username'
                       type='text'
                       placeholder='Username'
                       autoComplete='off' />
                <input onChange={props.handleChange}
                       value={props.password}
                       name='password'
                       type='password'
                       placeholder='Password'
                       autoComplete='off' />
                <button type='submit'>Create Account</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default SignupForm;