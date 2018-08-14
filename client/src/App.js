import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import Login from './Login/LoginFormContainer';
import Signup from './Signup/SignupFormContainer';
import Nav from './Nav';
import Footer from './Footer';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Goals from './Goals/';
import ProtectedRoute from './ProtectedRoute';
import { verify } from './redux/auth'
import Profile from './Profile.js'

class App extends Component {
  componentDidMount() {
    this.props.verify();
  }

  render() {
    const { isAuthenticated, loading } = this.props;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">RPGoals</h1>
            <div className="App-intro">
              Grow your character in the game and in real life.
            </div>
          </header>

          <Nav />
            {loading ?
              <div>...Loading user data</div>
              :
              <Switch>
                <Route exact path='/signup' render={props => isAuthenticated ?
                  <Redirect to='/profile' /> :
                  <Signup {...props} />} />
                <Route exact path='/login' render={props => isAuthenticated ?
                  <Redirect to='/profile' /> :
                  <Login {...props} />} />
                <ProtectedRoute path="/goals" component={Goals} />
                <ProtectedRoute path='/profile' component={Profile} />
              </Switch>
            }
          <Footer />
        </div>
    );
  }
}

export default withRouter(connect(state => state.user, { verify })(App));
