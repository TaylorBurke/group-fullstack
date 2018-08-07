import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        document.getElementById("injector").innerHTML = "Login in...!";
        e.preventDefault();

        axios.post('/sleep', {
            date: new Date(),
            sleepHours: this.state.hours
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="Login">
                <div id="injector">Please log in or <a href="#">Create an Account</a></div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="userName" placeholder="Enter username" onChange={this.handleChange} /><br />
                    <input type="password" name="pass" placeholder="Enter password" onChange={this.handleChange} /><br />
                    <button>Submit</button>

                </form>


            </div>
        )
    }

}

export default Login;