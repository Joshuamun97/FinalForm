import React from 'react';
import Home from '../Home/Home';
import Auth from '../../utils/auth';

const Profile = () => {
  const isLoggedIn = Auth.loggedIn();

  if (!isLoggedIn) {
    return <Home />;
  }

  return (
    <>
      <div className="Hello">Hello!!! </div>
    </>
  );
};
 
export default Profile;
