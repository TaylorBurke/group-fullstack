import React from 'react';
import './AddGoalForm.css';

function AddGoalForm(props) {
    return (
        <div className='addGoalFormPage'>
            <div className='goalHeader'>
                <h1 className='goalHeading'>GOALS</h1>
            </div>

            <div className='formContainer'>
                <form className='goalForm' onSubmit={props.handleSubmit}>
                    <h4 className='formTitle'>Add New Goal</h4>

                    <input 
                        className='goalInput'
                        name='title'
                        type='text'
                        value={props.title}
                        onChange={props.handleChange}
                        placeholder='Title'/>

                    <input
                        className='goalInput' 
                        name='difficulty'
                        type='text'
                        value={props.difficulty}
                        onChange={props.handleChange}
                        placeholder='Difficulty' />
                    <button className='formBtn' type='submit'>ADD GOAL!</button>
                </form>
            </div>
        </div>
    )
}

export default AddGoalForm;