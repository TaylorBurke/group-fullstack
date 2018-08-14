import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    render() {
        const { isAuthenticated, path } = this.props;
        const authenticationComponent = this.props.component;
        return (
            isAuthenticated ? 
                <Route path={path} component={authenticationComponent} /> :
                <Redirect to='/' />  
        )
    }
}

export default connect(state => state.user, {})(ProtectedRoute)