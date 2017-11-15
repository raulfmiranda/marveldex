import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
