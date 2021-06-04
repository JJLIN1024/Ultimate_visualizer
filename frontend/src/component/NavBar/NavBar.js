import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './NavBar.css';

export default function NavBar() {

  return (
      <AppBar position="sticky" color="inherit" className="NavBar">
        <Grid justify="space-between" container spacing={24}>
          <Grid item>
            <Toolbar >
              <Button size="large" 
              color="inherit" 
              href="/"
              >Ultimate Visualizer</Button>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar >
              <ButtonGroup color="inherit" aria-label="outlined primary button group">
                <Button size="large" color="inherit">Login</Button>
                <Button size="large" color="inherit">SignIn</Button>
              </ButtonGroup>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
  );
}
