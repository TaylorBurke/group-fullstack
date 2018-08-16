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
        <div className="archivePage">
            {goals}
        </div>
    )
}

// this export connect takes a cb function which takes two arguements, mapStateToProps and an empty object
export default connect(state => state, {})(Archive);