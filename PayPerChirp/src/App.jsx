import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import CommenterRegister from './pages/auth/CommenterRegister';
import BusinessRegister from './pages/auth/BusinessRegister';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import BusinessHome from './pages/business/Home';
import Posts from './pages/business/Posts';
import MyCredits from './pages/business/MyCredits';
import Dashboard from './pages/business/Dashboard';

import './App.css';

function App() {
  return (
    <Routes>
      <Route
          path="/*"
          element={
            <Routes>
              <Route path="/" element={<BusinessHome />} />
            </Routes>
          }>
      </Route>

      <Route
        path="/business/*" element={
          <Routes>
            <Route path="/" element={<BusinessHome />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/my-credits" element={<MyCredits />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        }>  
      </Route>

      <Route
        path="/auth/*" element={
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/commenter-register" element={<CommenterRegister />} />
            <Route path="/business-register" element={<BusinessRegister />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        }>  
      </Route>
    </Routes>
  );
}

export default App;
