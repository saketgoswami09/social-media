import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.map(post => ({
    ...post,
    imgSrc: `https://picsum.photos/200?random=${post.id}`
  }));
});
