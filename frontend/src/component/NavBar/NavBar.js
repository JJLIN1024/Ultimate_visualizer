import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import './NavBar.css';

export default function NavBar() {
  const logoutUrl = 'http://localhost:5000/logout';

  return (
      <AppBar position="sticky" color="inherit" className="NavBar">
        <Grid justify="space-between" container spacing={24}>
          <Grid item>
            <Toolbar >
              <Button size="large" 
              color="inherit" 
              href="/"
              className="Home-Btn"
              >Ultimate Visualizer</Button>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar >
              <ButtonGroup color="inherit" aria-label="outlined primary button group">
                <Button size="large" 
                      color="inherit"
                      component={Link}
                      to={'/sign-in'}>Login</Button>
                <Button size="large" 
                      color="inherit"
                      component={Link}
                      to={'/sign-up'}>Sign Up</Button>
                <Button size="large" 
                      color="inherit"
                      href={logoutUrl}
                      >Logout</Button>
              </ButtonGroup>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
  );
}
