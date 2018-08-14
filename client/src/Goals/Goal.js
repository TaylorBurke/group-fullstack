import React from 'react';

function Goal(props) {
    return (
        <div>
            <h3>{props.goal.title}</h3>
            <h4>{props.goal.difficulty}</h4>
            <label htmlFor=''>Completed:</label>
            <input 
                onChange={props.handleCompleted}
                type='checkbox'
                checked={props.goal.completed} />
            <button onClick={props.handleRemove}>Delete</button>
        </div>
    )
}

export default Goal;