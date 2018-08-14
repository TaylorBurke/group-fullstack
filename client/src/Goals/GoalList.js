import React from 'react';
import GoalContainer from './GoalContainer';
import AddGoalFormContainer from './AddGoalFormContainer';

function GoalList(props) {
    const goals = props.goals.map(goal => {
        return (
            <GoalContainer
                key={goal._id}
                goal={goal} />
        )
    })

    return (
        <div>
            <AddGoalFormContainer />
            {goals}
        </div>
    )
}

export default GoalList;