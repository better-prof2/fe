import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default function Header(props) {
return (
  <AppBar position='fixed'>
    <Toolbar>Better Professor
    <Tabs classes>
      <Tab component={Link} to='/' label='Home' />
      <Tab component={Link} to='/about' label='About' />
      <Tab component={Link} to='/signup' label='Sign Up' />
      <Tab component={Link} to='/login' label='Login' />
    </Tabs>
    </Toolbar>

  </AppBar>
)
}