import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//ROUTER
import { BrowserRouter } from 'react-router-dom';
//REDUX
import { Provider } from 'react-redux';
import store from './redux/index';

// Log changes in the store
store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
<Provider store={ store }>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
