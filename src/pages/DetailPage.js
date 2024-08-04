import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.items.find(p => p.id === parseInt(id)));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="detail-page">
      <h2>{post.title}</h2>
      <p>User ID: {post.userId}</p>
      <p>{post.body}</p>
      <img src={post.imgSrc} alt={post.title} />
    </div>
  );
};

export default DetailPage;
