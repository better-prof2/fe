import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default function Header(props) {
return (
  <AppBar position='relative'>
    <Toolbar>
      <Typography variant='h4'>Better Professor</Typography>
       <Tabs classes>
         <Tab component={Link} to='/' label='Home' />
         <Tab component={Link} to='/about' label='About' />
         <Tab component={Link} to='/signup' label='Sign Up' />
         <Tab component={Link} to='/login' label='Login' />
         <Tab component={Link} to='/dashboard' label='Dashboard' />
       </Tabs>
    </Toolbar>

  </AppBar>
)
}