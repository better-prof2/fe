import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'; // importing Provider to wrap the App component in
import { createStore, applyMiddleware } from 'redux'; // importing createStore and applyMiddleware to create a redux store
import thunk from 'redux-thunk'; // importing for async actions
import { reducer } from './reducers/reducer'; // importing the reducer to be an argument for the createStore function

const store = createStore(reducer, applyMiddleware(thunk));

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
