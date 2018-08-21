import React from "react";  
import {connect} from "react-redux";
import './Profile.css';

function Profile(props) {  
    return (
        <div className='profilePage'>
            <div className='profileHeader'>
                <h1 className='profileHeading'>PROFILE</h1>
            </div>
            <div className='statContainer'>
                <div className='column'>
                    <img className='profileImg' src={require('./placeholder.svg')} />
                    <div className='column'>
                        <h1>Level</h1>
                        <h1 className='biggerText'>{Math.floor(props.goals.filter(goal => goal.completed).length / 5) +1}</h1>
                    </div>
                </div>

                <div className='column'>
                    <img className='profileImg' src={require('./flame.svg')} />
                    <div className='column'>
                        <h1>Streak</h1>
                        <h1 className='biggerText'>{ props.goals
                            .filter(goal => goal.completed)
                            .filter(goal => {
                                const rightNow = new Date().getTime();
                                const goalUpdatedAt = new Date(goal.updatedAt).getTime();
                                const twentyFourHrs = 86400000;
                                return goalUpdatedAt > rightNow - twentyFourHrs;
                            }).length }
                        </h1>
                    </div>
                </div>

                <div className='column'>
                    <img className='profileImg' src={require('./target.svg')} />
                    <div className='column'>
                        <h1 className='statTitle'>Total Goals</h1>
                        <h1 className='biggerText'>{props.goals.length}</h1>
                    </div>
                </div>
            
                <div className='column'>
                    <img className='profileImg' src={require('./trophy.svg')} />
                    <div className='column2'>
                        <h1 className='statTitle'>Completed</h1>
                        <h1 className='biggerText'>{props.goals.filter(goal => goal.completed).length}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state, { })(Profile); 