import React from 'react';
import AddGoalForm from './AddGoalForm';
import { connect } from 'react-redux';
import { addGoal } from '../redux/goals';

class AddGoalFormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                title: '',
                difficulty: '',
                completed: false
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: '',
                difficulty: '',
                completed: false
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addGoal(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <AddGoalForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs}
            />
        )
    }
}

export default connect(null, { addGoal })(AddGoalFormContainer)