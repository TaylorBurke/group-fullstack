import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import goals from './goals';
import user from './auth';

const reducer = combineReducers({
    goals,
    user
});

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);