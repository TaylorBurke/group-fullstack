import React from 'react';
import GoalList from './GoalList'
import { connect } from 'react-redux';
import { loadGoals } from '../redux/goals';

class GoalListContainer extends React.Component {
    componentDidMount() {
        this.props.loadGoals();
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
        this.props.addTodo(this.state.inputs);
        this.clearInputs()
    }

    render() {
        return (
            <GoalList
                goals={this.props.goals} />
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { loadGoals })(GoalListContainer)