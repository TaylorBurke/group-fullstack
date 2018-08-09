import React from 'react';
import Habits from './Habits';
import Todos from './Todos';
import Goals from './Goals';
import Archive from './Archive';
import { Link } from 'react-router-dom';


const Dash = () => {
    return (
        <div className ="Dash">
        <Link to ="/archives">Archive </Link>
            <Archive />
            <Link to ="/habits">Habits </Link>
            <Habits />
            <Link to ="/todos">Todos </Link>
            <Todos />
            <Link to ="/goals">Goals </Link>
            <Goals />
        </div>
    )
}

export default Dash;