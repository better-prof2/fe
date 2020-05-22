import React from 'react';
import Button from '@material-ui/core/Button'
import SignUp from "./SignUp"

import './App.css';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <h1>Better Professor App</h1>
      <SignUp />
      <Login />
      <Button variant='contained'>
        Click me!
      </Button>
    </div>
  )
}

export default App;
