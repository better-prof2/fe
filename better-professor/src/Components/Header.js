import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

//////////styles///////////
const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: 'auto'
  }
}))

export default function Header(props) {
  const classes = useStyles();
return (
  <AppBar position='relative'>
    <Toolbar>
      <Typography variant='h4'>Better Professor</Typography>
       <Tabs className={classes.tabContainer}>
         <Tab component={Link} to='/' value="/" label='Home' />
         <Tab component={Link} to='/about' value="/about" label='About' />
         <Tab component={Link} to='/signup' value="/signup" label='Sign Up' />
         <Tab component={Link} to='/login' label='Login' />
         <Tab component={Link} to='/dashboard' value="/dashboard" label='Dashboard' />
       </Tabs>
    </Toolbar>

  </AppBar>
)
}