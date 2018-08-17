import React, { Component } from 'react';
import Login from './Login/LoginFormContainer';
import Signup from './Signup/SignupFormContainer';
import Nav from './Navbar/Nav.js';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Goals from './Goals/';
import ProtectedRoute from './ProtectedRoute';
import { verify } from './redux/auth';
import Profile from './Profile/Profile.js';
import Archive from './Goals/Archive';

class App extends Component {

  componentDidMount() {
    this.props.verify();
  }

  render() {
    const { isAuthenticated, loading } = this.props;
    return (
        <div className="App">
          <Nav />
            {loading ?
              <div>...Loading user data</div>
              :
              <Switch>
                <Route exact path='/' component={Signup} />
                <Route exact path='/signup' render={props => isAuthenticated ?
                  <Redirect to='/profile' /> :
                  <Signup {...props} />} />
                <Route exact path='/login' render={props => isAuthenticated ?
                  <Redirect to='/goals' /> :
                  <Login {...props} />} />
                <ProtectedRoute path="/goals" component={Goals} />
                <ProtectedRoute path='/profile' component={Profile} />
                <ProtectedRoute path='/archive' component={Archive} />
              </Switch>
            }
        </div>
    );
  }
}

export default withRouter(connect(state => state.user, { verify })(App));
