import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('userInfo');
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  try {
    // Validate if user info is valid JSON
    JSON.parse(user);
    return children;
  } catch (error) {
    localStorage.removeItem('userInfo');
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;