import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from './redux/auth';

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
        img:not([src*=".svg"]), video { filter: invert(100%) }`




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


                {!isAuthenticated && <div className="nav-link"><Link to="/signup">Sign Up</Link></div>}
                {!isAuthenticated && <div className="nav-link"><Link to="/login">Log In</Link></div>}
                {isAuthenticated && <div className="nav-link"><Link to="/goals">Goals</Link></div>}
                {isAuthenticated && <div className="nav-link"><Link to="/profile">Profile</Link></div>}
                {isAuthenticated && <div className="nav-link"><button onClick={this.props.logout}>Logout</button></div>}

                <Link to="/dash"> Dashboard </Link>

                <div>
                    <button className="Toggle" aria-pressed={this.isActive()} onClick={this.themeSwitcher}>
                        dark theme:
                    <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
                    </button>
                    <style media={this.isActive() ? 'screen' : 'none'}>
                        {this.css}
                    </style>
                </div>
            </div>

        )
    }
}

export default connect(state => state.user, { logout })(Nav);