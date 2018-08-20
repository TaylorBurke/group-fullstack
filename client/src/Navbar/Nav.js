import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../redux/auth';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            active: 'false'
        }

        this.store = typeof localStorage === 'undefined' ? null : localStorage;

        this.css = `  
        html { filter: invert(100%); background: #fefefe; }  
        * { background-color: inherit }
        img:not([src*=".gif"]), video { filter: invert(100%) }`

        { this.isActive() ? this.css.trim() : this.css }
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.store) {
            this.setState({
                active: this.store.getItem('Toggle') || false
            });
        }
    }

    // buttom click triggers state to update to active
    componentDidUpdate() {
        if (this.store) {
            this.store.setItem('Toggle', this.state.active);
        }
    }

    isActive = () => this.state.active;

    themeSwitcher = () => {
        this.setState({
            active: !this.isActive()
        });
    }
    render() {
        const { isAuthenticated } = this.props;
        return (
            <div className="navBar">
                <img src={require('../logo.gif')} className="App-logo" alt="logo" />
                <h2 className='navName'>{this.props.user.username.toUpperCase()}</h2>
                <div>
                    <button className='navBtn theme' aria-pressed={this.isActive()} onClick={this.themeSwitcher}>
                    <span aria-hidden="false">{this.isActive() ? 'Light Theme' : 'Dark Theme'}</span>
                    </button>
                    <style media={this.isActive() ? 'none' : 'screen'}>
                        {this.css}
                    </style>
                </div>

                {!isAuthenticated && <Link to="/signup">Sign Up</Link>}
                {!isAuthenticated && <Link to="/login">Log In</Link>}
                {isAuthenticated && <Link to="/goals">Goals</Link>}
                {isAuthenticated && <Link to="/profile">Profile</Link>}
                {isAuthenticated && <Link to="/archive">Archive</Link>}
                {isAuthenticated && <button className='navBtn logout'onClick={this.props.logout}>Logout</button>}
            </div>
        )
    }
}

export default connect(state => state.user, { logout })(Nav);