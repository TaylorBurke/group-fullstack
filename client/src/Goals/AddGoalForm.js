import React from 'react';

function AddGoalForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h4>Add New Goal</h4>

                <input name='title'
                       type='text'
                       value={props.title}
                       onChange={props.handleChange}
                       placeholder='Title'/>

                <input name='difficulty'
                       type='text'
                       value={props.difficulty}
                       onChange={props.handleChange}
                       placeholder='Difficulty' />

                <input name='completed'
                       type='checkbox'
                       value={props.completed}
                       onChange={props.handleChange} />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddGoalForm;