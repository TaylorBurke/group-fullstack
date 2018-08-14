import React from 'react';
import Goals from './Goals/Goal.js';
import Archive from './Archive';
import { Link } from 'react-router-dom';
import Experience from './Experience';

const Dash = () => {
    return (
        <div className="Dash">
            <Link to ="/archives">Archive </Link>
                <Archive />
            <Link to ="/goals">Goals </Link>

                <Goals />

        </div>
    )
}

export default Dash;