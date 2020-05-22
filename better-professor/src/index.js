import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

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



