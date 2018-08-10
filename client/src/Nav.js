import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
            <div className="navBar">
                <Link to="/"> Login</Link>
                <Link to="/dash"> Dashboard </Link>
            </div>

    )
}


export default Nav;
