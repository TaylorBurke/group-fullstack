import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { signup } from '../redux/auth';

class SignupFormContainer extends React.Component {
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
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.signup;
        let errMsg = '';
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = 'Invalid username or password';
        } else if (authErrCode > 499) {
            errMsg = 'Server error';
        }

        return (
            <SignupForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                errMsg={ errMsg }
                {...this.state.inputs} />
        )
    }
}

export default connect(state => state.user, { signup })(SignupFormContainer)
