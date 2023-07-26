import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate } from 'react-router-dom';
import useHeader from './useHeader';

export default function Header() {
  const title = process.env.REACT_APP_BLOG_TITLE;
  const navigate = useNavigate();
  const { loginStatus, logout } = useHeader();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <FeedIcon color='inherit' sx={{ mr: 2 }} />

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {loginStatus !== 'authenticated' && (
            <Button
              color='inherit'
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </Button>
          )}
          {loginStatus === 'authenticated' && (
            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
