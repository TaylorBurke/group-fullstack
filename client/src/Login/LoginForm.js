import React from 'react'

function LoginForm(props) {
    return (
        <div className='login-wrapper'>
            <form onSubmit={props.handleSubmit} autoComplete='off'>
                <h3>Log In</h3>
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
                <button type='submit'>Submit</button>
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default LoginForm;
