import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../features/Layout/Footer/Footer';
import Header from '../features/Layout/Header/Header';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Fragment>
            <Header />
            Admin
            <Footer />
          </Fragment>
        }
      />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default PrivateRoutes;
