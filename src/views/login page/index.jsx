import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform login validation here
    // If successful:
    navigate({ pathname: '/home' });
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Submitted:', { username, password });
  };

  const handleForgotPassword = () => {
    // Redirect to or show the forgot password functionality
    console.log('Redirect to Forgot Password');
  };

  const handleSignUp = () => {
    // Redirect to or show the sign up page
    console.log('Redirect to Sign Up');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#015498' }}>Submit</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleForgotPassword} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#015498' }}>
          Forgot Password
        </button>
        <button onClick={handleSignUp} style={{ padding: '0.5rem 1rem', backgroundColor: '#015498'  }}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
