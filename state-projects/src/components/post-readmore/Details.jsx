import React from 'react';

export default function Details({ post, onClose }) {
  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>{post.author}</p>
          <p>{post.email}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
}
