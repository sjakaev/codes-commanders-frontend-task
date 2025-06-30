import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { setUser } from './features/auth/authSlice';
import styles from './SignInPage.module.css';

const SignInPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      );
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      if (data.length > 0) {
        dispatch(setUser(data[0]));
        navigate('/');
      } else {
        alert('User not found');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to sign in');
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Sign In</h1>
        <Link to="/" className={styles.signinButton}>Home</Link>
      </header>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
