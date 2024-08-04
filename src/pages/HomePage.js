import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import PostCard from '../components/PostCard';
import './styles.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
