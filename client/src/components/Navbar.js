import React from 'react';
import { AppBar, IconButton, Typography, Container, Toolbar, Box, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LockIcon from '@mui/icons-material/Lock'
// import photoURL from "../profile.jpeg"
import { useValue } from '../Context/ContextProvider';
import UserIcons from './user/UserIcons';

// const user = { name:"test", photoURL}


const Navbar = () => {
  const {
    state:{currentUser},
    dispatch,
  } = useValue()

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <IconButton size='large' color='inherit' sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='h1'
              noWrap
              sx={{ display: { xs: 'none', md: 'block' } }}>
              You Are Welcome
            </Typography>
            <Typography
              variant='h6'
              component='h1'
              noWrap
              sx={{ display: { xs: 'block', md: 'none' } }}>
              YRW
            </Typography>
          </Box>
          {!currentUser ? ( <Button 
          color='inherit' variant='h6' component='h1' startIcon={<LockIcon/>} onClick={()=>dispatch({type:"OPEN_LOGIN"})}>
            Login
          </Button>) : (
            <UserIcons/>
          ) }
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
