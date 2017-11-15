import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadEvents} from './actions/eventActions';

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();
store.dispatch(loadEvents());

ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>, 
    document.getElementById('root')
);