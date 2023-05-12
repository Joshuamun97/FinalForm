import React from 'react';
import './index.scss'
import Post from '../Post/index'

const FriendsPosts = ({
  thoughts,
}) => {

  return (
    <div className="feedWrapper rounded-2 mt-0 p-3"
      // style={{ border: '1px solid #1a1a1a' }}
      >
      <Post thoughts={thoughts} />
    </div>

  );
};

export default FriendsPosts;
