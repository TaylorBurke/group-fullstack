import React from 'react';
import GoalContainer from './GoalContainer';
import { connect } from 'react-redux';
import './Archive.css';

function Archive(props) {
    //filter through goals, and then map through them
    const goals = props.goals.filter(goal => goal.completed).map(goal => {
        return (
            <GoalContainer key={goal._id} goal={goal} />
        )
    })
    return (
        <div>
        

        <div className="archivePage">
        <div className='archiveHeader'>
                <h1 className='archiveHeading'>COMPLETED</h1>
            </div>
            <div className ="completedGoals">
            {goals}
            </div>
        </div>
        </div>

    )
}

// this export connect takes a cb function which takes two arguements, mapStateToProps and an empty object
export default connect(state => state, {})(Archive);