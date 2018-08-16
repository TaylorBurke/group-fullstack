import React from 'react';
import GoalContainer from './GoalContainer';
import AddGoalFormContainer from './AddGoalFormContainer';
import './GoalList.css'

function GoalList(props) {
    const goals = props.goals.map(goal => {
        return (
            <GoalContainer
                key={goal._id}
                goal={goal} />
        )
    })

    return (
        <div className='goalsPage'>
            <AddGoalFormContainer />
            <div className='goalBody'>
                {goals}
            </div>
        </div>
    )
}

export default GoalList;