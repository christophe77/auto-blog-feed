import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useLogin from './useLogin';

const LoginPage = () => {
  const { checkPassword, handlePasswordChange, password } = useLogin();
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, mt:"20px", width: '25ch' },
        textAlign:'center'
      }}
      noValidate
    >
      <h2>Login</h2>
      <TextField id='password' value={password} onChange={handlePasswordChange} label='Password' variant='standard' />
      <br />
      <Button variant='outlined' onClick={checkPassword}>
        Login
      </Button>
    </Box>
  );
};
export default LoginPage;
