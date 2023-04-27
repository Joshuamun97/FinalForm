import React from 'react';
import { useQuery } from '@apollo/client';
import Share from '../../components/Share';
import FriendsPosts from '../../components/FriendsPosts';
import './index.scss';
import Home from '../Home/Home';
import Auth from '../../utils/auth';

const FriendsFeed = () => {
  const isLoggedIn = Auth.loggedIn();

  if (!isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="feedContainer d-flex flex-wrap justify-content-center w-100">
      <FriendsPosts />
      <Share />
    </div>
  );
};

export default FriendsFeed;


