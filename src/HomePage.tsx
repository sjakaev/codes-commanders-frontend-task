import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from './features/posts/postsApi';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { clearUser } from './features/auth/authSlice';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const { data: posts = [] } = useGetPostsQuery();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Posts</h1>
        {user ? (
          <button onClick={handleLogout} className={styles.signinButton}>
            Log Out
          </button>
        ) : (
          <Link to="/signin" className={styles.signinButton}>
            Sign In
          </Link>
        )}
      </header>
      <div className={styles.grid}>
        {posts.slice(0, 8).map(post => (
          <div key={post.id} className={styles.tile}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
