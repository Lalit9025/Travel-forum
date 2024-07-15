// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setToken, setUserData } from '../hooks/authSlice';

// const AuthCallback = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  

//   useEffect(() => {
//     const queryParams = new URLSearchParams(window.location.search);
//     console.log("Query Params:", queryParams.toString());
//     const token = queryParams.get('token');
//     const userJson = queryParams.get('user');
    

//     console.log("Token:", token);
//     console.log("User JSON:", userJson);

//     if (token && userJson) {
//       const userData = JSON.parse(decodeURIComponent(userJson));
//       console.log("User Data:", userData);

//       console.log("Dispatching token:", token);
//       console.log("Dispatching user data:", userData);

//       localStorage.setItem('token', token);
      

//       dispatch(setToken(token));
//       dispatch(setUserData(userData));
      
//       navigate('/');
//     } else {
//       navigate('/login');
//     }
//   }, [dispatch, navigate]);

//   return (
//     <div>Loading...</div>
//   );
// };

// export default AuthCallback;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUserData } from '../hooks/authSlice';

const AuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log("Query Params:", queryParams.toString());
    let token = queryParams.get('token');
    let userJson = queryParams.get('user');
    
    // Check if token and user data are in query params, if not, retrieve from localStorage
    if (!token || !userJson) {
      token = localStorage.getItem('token');
      userJson = localStorage.getItem('user');
    }

    console.log("Token:", token);
    console.log("User JSON:", userJson);

    if (token && userJson) {
      const userData = JSON.parse(decodeURIComponent(userJson));
      console.log("User Data:", userData);

      console.log("Dispatching token:", token);
      console.log("Dispatching user data:", userData);

      // Store the token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', userJson);

      // Dispatch actions to store the token and user data in Redux
      dispatch(setToken(token));
      dispatch(setUserData(userData));

      // Redirect to the home page
      navigate('/');
    } else {
      console.log("No token or user data found, navigating to login.");
      navigate('/login');
    }
  }, [dispatch, navigate]);

  return (
    <div>Loading...</div>
  );
};

export default AuthCallback;
