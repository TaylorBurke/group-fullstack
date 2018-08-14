import React from "react";  
import {connect} from "react-redux";

function Profile(props) {  
    return (
        <div>
            <h2>Welcome, <i>@{props.user.username}</i></h2>
        </div>
    )
}

export default connect(state => state.user, {})(Profile); 