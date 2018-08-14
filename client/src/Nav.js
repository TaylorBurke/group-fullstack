import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './redux/auth';

function Nav(props) {
    const { isAuthenticated } = props;
    return (
        <div className="navBar">
            {!isAuthenticated && <div className="nav-link"><Link to="/signup">Sign Up</Link></div>}
            {!isAuthenticated && <div className="nav-link"><Link to="/login">Log In</Link></div>}
            {isAuthenticated && <div className="nav-link"><Link to="/goals">Goals</Link></div> }
            {isAuthenticated && <div className="nav-link"><Link to="/profile">Profile</Link></div>}
            {isAuthenticated && <div className="nav-link"><button onClick={props.logout}>Logout</button></div>}
        </div>
    )
}

export default connect(state => state.user, { logout })(Nav);