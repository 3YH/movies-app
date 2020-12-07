import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

export default function TopBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Movies</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
