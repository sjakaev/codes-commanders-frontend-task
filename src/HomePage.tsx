import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPostsQuery } from './features/posts/postsApi';
import './HomePage.css';

const HomePage: React.FC = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <div>
      <header className="header">
        <h1 className="title">Posts</h1>
        <Link to="/signin" className="signin-button">Sign In</Link>
      </header>
      <div className="grid">
        {posts.slice(0, 8).map(post => (
          <div key={post.id} className="tile">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
