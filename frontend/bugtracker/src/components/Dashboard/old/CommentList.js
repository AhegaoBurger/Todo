// src/components/Dashboard/CommentList.js
import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get('/api/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <div key={comment.CommentID} className="comment-item">
          <p>{comment.CommentText}</p>
          {/* ... other comment details ... */}
        </div>
      ))}
    </div>
  );
}

export default CommentList;
