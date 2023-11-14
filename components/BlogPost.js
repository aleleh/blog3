// components/BlogPost.js
import { useState } from 'react';
import ReadMoreButton from './ReadMoreButton';

function BlogPost({ title, body }) {
  const [isFullPostVisible, setIsFullPostVisible] = useState(false);

  const toggleFullPost = () => {
    setIsFullPostVisible(!isFullPostVisible);
  };

  return (
    <article className="shadow-lg p-5 mb-5 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="mb-4">{isFullPostVisible ? body : `${body.substring(0, 100)}...`}</p>
      <ReadMoreButton onClick={toggleFullPost} isFullPostVisible={isFullPostVisible} />
    </article>
  );
}

export default BlogPost;