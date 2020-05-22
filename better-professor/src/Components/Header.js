import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header(props) {
return (
  <AppBar position='fixed'>
    <Toolbar>Better Professor
    <Tabs classes>
      <Tab label='Home' />
      <Tab label='About' />
      <Tab label='Sign Up' />
      <Tab label='Login' />
    </Tabs>
    </Toolbar>

  </AppBar>
)
}