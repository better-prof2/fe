import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme'
import Button from '@material-ui/core/Button';
import SignUp from "./SignUp";
import Header from './Header';

import './App.css';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App;
