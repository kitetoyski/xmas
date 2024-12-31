import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#ff4081',
          boxShadow: '0 3px 5px 2px rgba(255, 64, 129, .3)',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* Add an icon if needed */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
            }}
          >
            EMBER
          </Typography>
          <Button color="inherit">
            <NavLink
              to="/christmas"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              Christmas
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              to="/newyear"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold',
              }}
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              New Year
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
