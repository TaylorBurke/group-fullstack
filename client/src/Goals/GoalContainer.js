import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';
import { editGoal, deleteGoal } from '../redux/goals';

class GoalContainer extends React.Component {

    handleCompleted(e) {
        this.props.editGoal(this.props.goal._id, { completed: e.target.checked })
    }

    handleDelete() {
        this.props.deleteGoal(this.props.goal._id)
    }

    render() {
        return (
            <Goal
                handleCompleted={this.handleCompleted.bind(this)}
                handleDelete={this.handleDelete.bind(this)}
                goal={this.props.goal}
            />
        )
    }
}

export default connect(null, { editGoal, deleteGoal })(GoalContainer)