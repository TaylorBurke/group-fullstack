import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../redux/auth';

class LoginFormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: '',
                password: ''
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: '',
                password: ''
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.login;
        let errMsg = '';
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = 'Invalid username or password';
        } else if (authErrCode > 499) {
            errMsg = 'Server error';
        }

        return (
            <LoginForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                errMsg={errMsg}
                {...this.state.inputs} />
        )
    }
}

export default connect(state => state.user, { login })(LoginFormContainer);