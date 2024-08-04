import React from 'react';
import './styles.css';

const PostCard = ({ post }) => (
  <div className="card">
    <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post Image" />
    <div className="details">
      <p>User ID: {post.userId}</p>
      <h3 className="title">Title: {post.title.slice(0, 20)}...</h3>
      <p className="body">Body: {post.body.slice(0, 100)}...</p>
      <a className="read-more" href={`/item/${post.id}`}>Read More...</a>
    </div>
  </div>
);

export default PostCard;
