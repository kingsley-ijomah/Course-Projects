import React, { useEffect, useState } from 'react';
import Details from './Details';
import data from './data.json';
import './Posts.scss';

export default function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleClickedPost = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
    setPosts(data);
  }, []);

  if (selectedPost) {
    return <Details post={selectedPost} onClose={handleCloseDetails} />;
  } else {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="posts__item">
            <div>{post.title}</div>
            <button onClick={() => handleClickedPost(post)}>Read More</button>
          </div>
        ))}
      </div>
    );
  }
}
