import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Dictionary to store registered users (case-sensitive)
  const [registeredUsers, setRegisteredUsers] = useState({
    'user1': { email: 'user1@example.com', password: 'password1' },
    'user2': { email: 'user2@example.com', password: 'password2' },
  });

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username exists in the registered users dictionary and if passwords match
    const storedUser = registeredUsers[username]; // Case-sensitive comparison

    if (storedUser && storedUser.password === password) {
      setIsLoggedIn(true); // User is now logged in
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  };

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add the new user to the registeredUsers dictionary (case-sensitive)
    const newUser = { email, password };
    setRegisteredUsers(prevUsers => {
      const updatedUsers = { ...prevUsers, [username]: newUser };
      return updatedUsers;
    });
    alert('Registration successful');
    setIsLogin(true); // Switch to login form after registration
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        {/* This is the section where the user can modify content */}
        <p>You are logged in. You can now modify your details or access restricted content.</p>
      </div>
    );
  }

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/6nvG60RG6I1oBz8J1EsGoF6vZVgNJ6PTnUdxVx"
        crossOrigin="anonymous"
      />
      {/* Bootstrap JS Bundle with Popper */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76A9YlsIb3DNnM9vbuIW8iEVAenbqiD0xIV6mA5X61k8p8h+lHuE9MlKCiGE6jm"
        crossOrigin="anonymous"
      ></script>

      <div className="wrapper">
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <h1>{isLogin ? 'Login' : 'Register'}</h1>

          {/* Username input */}
          <div className="input-box">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          {/* Email input (for registration only) */}
          {!isLogin && (
            <div className="input-box">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>
          )}

          {/* Password input */}
          <div className="input-box">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          {/* Confirm password input (for registration only) */}
          {!isLogin && (
            <div className="input-box">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
          )}

          {/* If it's the login form, show "Remember me" checkbox */}
          {isLogin && (
            <div className="remember-forgot d-flex justify-content-between align-items-center mt-3">
              <label className="b">
                <input type="checkbox" className="me-2" />
                Remember me
              </label>
              <a href="#" className="text-primary" role="link" aria-label="Forgot password">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100 mt-4">
            {isLogin ? 'Login' : 'Register'}
          </button>

          {/* Toggle between login and register forms */}
          <div className="register-link text-center mt-3">
            <p>
              {isLogin ? (
                <>
                  Don't have an account? <a href="#" onClick={() => setIsLogin(false)} className="text-primary" role="link" aria-label="Register now">Register</a>
                </>
              ) : (
                <>
                  Already have an account? <a href="#" onClick={() => setIsLogin(true)} className="text-primary" role="link" aria-label="Login now">Login</a>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
