import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './index.scss';
import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='commentForm pb-5'>
      <h4 className='pb-4'>Reply to Post</h4>

      {/* {Auth.loggedIn() ? ( */}
        <>
          <form
            className="d-flex flex-row align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="commentArea d-flex justify-content-start">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="commentArea message"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="commentButton" type="submit">
                Comment
              </button>
            </div>
          </form>
        </>
      {/* // ) : (
      //   <p>
      //     You need to be logged in to share your thoughts. Please{' '}
      //     <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
      //   </p>
      // )} */}
    </div>
  );
};

export default CommentForm;
