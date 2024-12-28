import React, { useState } from 'react';
import './LoginForm.css'; // Ensure this is correctly imported
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const [registeredUsers, setRegisteredUsers] = useState({
    user1: { email: 'user1@example.com', password: 'password1' },
    user2: { email: 'user2@example.com', password: 'password2' },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = registeredUsers[username];
    if (storedUser && storedUser.password === password) {
      navigate('/home'); // Redirect to home page
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = { email, password };
    setRegisteredUsers((prevUsers) => ({ ...prevUsers, [username]: newUser }));
    alert('Registration successful');
    setIsLogin(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="wrapper p-4 rounded shadow-lg">
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <h1>{isLogin ? 'Login' : 'Register'}</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          {!isLogin && (
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="icon" />
            </div>
          )}

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          {!isLogin && (
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className="icon" />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? 'Login' : 'Register'}
          </button>

          <div className="register-link">
            <p>
              {isLogin ? (
                <a href="#!" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                  Don't have an account? Register
                </a>
              ) : (
                <a href="#!" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
                  Already have an account? Login
                </a>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
