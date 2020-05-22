import React from 'react';
import Button from '@material-ui/core/Button';
import SignUp from "./SignUp";
import Header from './Header';

import './App.css';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <h1 className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <h1>Home</h1>} />
        <Route exact path='/about' component={() => <h1>About</h1>} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <h1>Better Professor App</h1>
    
      <Button variant='contained'>
        Click me!
      </Button>
    </h1>
  )
}

export default App;
