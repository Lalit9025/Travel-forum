import React, { useState, useEffect } from 'react';
import './SignInSignUp.css';
import google from '../assets/google.png'
import axios from 'axios'

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [animationClass, setAnimationClass] = useState('animated-signup');

  useEffect(() => {
    if (isSignIn) {
      setAnimationClass('animated-signin');
    } else {
      setAnimationClass('animated-signup');
    }
  }, [isSignIn]);

  const handleSignInClick = () => {
    setIsSignIn(false);
  };

  const handleSignUpClick = () => {
    setIsSignIn(true);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/v1/auth/google');
  //     window.location.href = response.data.authUrl;

  //   } catch (error) {
  //     console.error('Error during Google Sign-In:', error);
  //   }
  // }
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:8080/api/v1/auth/google';
  };

  return (
    <div className="signinsignup">
      <div className={`wrapper ${animationClass}`}>
        <div className="form-container sign-up">
          <form action="#">
            <h2>sign up</h2>
            <div className="form-group">
              <input type="text" required />
              <i className="fas fa-user"></i>
              <label>username</label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <i className="fas fa-at"></i>
              <label>email</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>password</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>confirm password</label>
            </div>
            <button type="submit" className="btn">sign up</button>
            <div className="link">
              <p>You already have an account? <span className="signin-link" onClick={handleSignInClick}>sign in</span></p>
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <form action="#">
            <h2>login</h2>
            <div className="form-group">
             <div className='signIn_google' onClick={handleGoogleSignIn}>
              <img src={google} className='google_img'/>
              <span>Google</span>
             </div>
            </div>
            <div className="form-group">
              <input type="text" required />
              <i className="fas fa-user"></i>
              <label>username</label>
            </div>
            <div className="form-group">
              <input type="password" required />
              <i className="fas fa-lock"></i>
              <label>password</label>
            </div>
            <div className="forgot-pass">
              <a href="#">forgot password?</a>
            </div>
            <button type="submit" className="btn">login</button>
            <div className="link">
              <p>Don't have an account? <span className="signup-link" onClick={handleSignUpClick}>sign up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
