
import React from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="singlePost pt-3 pb-4">
      <div className="commentTop border p-3 mb-5 mt-3 rounded-3 d-flex flex-column justify-content-center">
        <h3 className="d-flex">
          {thought.thoughtAuthor}'s Post <br />
        </h3>
        <div className="">
          <blockquote
            className=""
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              // border: '2px dotted #1a1a1a',
              lineHeight: '1.5',
            }}
          >
            {thought.thoughtText}
            <br />
            <span style={{ fontSize: '1rem' }}>
              posted on {thought.createdAt}
            </span>
          </blockquote>
        </div>
      </div>
      <div className="commentBottom p-3 border rounded">
        <CommentForm thoughtId={thought._id} />
        <CommentList comments={thought.comments} />
      </div>
    </div>
  );
};

export default SingleThought;
