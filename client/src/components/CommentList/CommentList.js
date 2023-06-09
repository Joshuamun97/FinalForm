import React from 'react';
import './index.scss'

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h6>Comments will populate here as users interact with this post.</h6>;
  }

  return (
    <>
      <h3
        className="display-inline-block"
        style={{ borderBottom: '1px solid #1a1a1a' }}
      >
       
      </h3>
      <div className="commentsFeed flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 border-bottom">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
