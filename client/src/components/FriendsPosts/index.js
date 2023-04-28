import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import Post from '../Post/index'

const FriendsPosts = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  //   if (!thoughts.length) {
  //     return <h3>Add friends to see their posts!</h3>;
  //   }

  return (
    <div className="feedWrapper rounded-2 col-12 col-md-7 mb-3 mt-0 p-3"
      // style={{ border: '1px solid #1a1a1a' }}
      >
      <Post thoughts={thoughts} title="Friends Feed"/>
    </div>

  );
};

export default FriendsPosts;
