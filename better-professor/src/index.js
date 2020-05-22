import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; // importing Provider to wrap the App component in
import { createStore } from 'redux'; // importing createStore to create a redux store
import { reducer } from './reducers/reducer'; // importing the reducer to be an argument for the createStore function

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
       <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
