import React from 'react';
import './Goal.css'
import 'pretty-checkbox';
import 'material-icons';

function Goal(props) {
    return (
        <div className='goalPage'>
            <div>
                <h3 className='spanTitle1'>Title: </h3>
                <h3 className='spanTitle2'> {props.goal.title}</h3>
            </div>

            <div>
                <h3 className='spanTitle1'>Difficulty: </h3> 
                <h3 className='spanTitle2'> {props.goal.difficulty}</h3>
            </div>

            <div className='toggles'>
                <div className="pretty p-switch p-fill">
                    <input type="checkbox"
                        name='radio66'
                        onChange={props.handleCompleted}
                        checked={props.goal.completed} />
                    <div className="state">
                        <label>Completed</label>
                    </div>
                </div>

                <button className='deleteBtn' onClick={props.handleDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default Goal;