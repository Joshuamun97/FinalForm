import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

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
    <div className="feedWrapper d-flex rounded-2 col-12 col-md-7 mb-3 mt-3 p-3"
    style={{ border: '1px solid #1a1a1a' }}>
        <div className="feedTop">
            Feed
        </div>

    </div>

  );
};

export default FriendsPosts;
