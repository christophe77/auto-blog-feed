import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface ILoadingProps {
  isLoading: boolean;
}
export default function Loading({ isLoading }: ILoadingProps) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}
