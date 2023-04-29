import React from 'react';
import Auth from '../../utils/auth';
import './index.scss'
import Login from '../Login/Login';
import FriendsFeed from '../FriendsFeed';

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="homeContainer">
      <div className="">
        <div>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
          {Auth.loggedIn() ? (
            <>
              <FriendsFeed />
            </>
          ) : (
            <div className='mt-5'>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
