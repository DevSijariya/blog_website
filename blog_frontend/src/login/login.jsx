import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://10.0.0.51:8000/api/token/', {
        username,
        password,
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      window.location.href = '/blog';
      // Redirect if needed
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  

  return (
    <div id="login_global">
      <div id="login_section" className='login-form-container'>
        <img src="/images/logo.png"></img>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div class="input_sections">
            
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder='Username'
            />
          </div>

          <div class="input_sections">
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder='Password'
            />
          </div>

          {error && (
            <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
          )}
          <div class="input_sections">
          <button type="submit"> Login </button>
           <button type="button"> SignUp </button>
          </div>
          <div className="reset_pass">
            <a href="#">Reset Password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
