import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  return (
    <div>
      <header className="header">
        <h1 className="title">Sign In</h1>
        <Link to="/" className="signin-button">Home</Link>
      </header>
      <p style={{ padding: '1rem' }}>This is the sign-in page.</p>
    </div>
  );
};

export default SignInPage;
