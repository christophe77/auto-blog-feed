import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../features/Login/Login';
import Home from '../features/Home/Home';
import Header from '../features/Layout/Header/Header';
import Footer from '../features/Layout/Footer/Footer';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Fragment>
            <Header />
            <Home />
            <Footer />
          </Fragment>
        }
      />
      <Route path='/login' element={<LoginPage />} />
      <Route
        path='/article/:articleId'
        element={
          <Fragment>
            <Header />
            article
          </Fragment>
        }
      />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
};

export default PublicRoutes;
