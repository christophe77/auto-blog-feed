import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { RootState } from '../types/redux';

const AppRouter = () => {
  const loginStatus = useSelector((state: RootState) => state.loginReducer.loginStatus);
  if (loginStatus === 'checking') return <div className='loading'>Checking...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {loginStatus === 'authenticated' ? (
          <Route path='/*' element={<PrivateRoutes />} />
        ) : (
          <Route path='/*' element={<PublicRoutes />} />
        )}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
