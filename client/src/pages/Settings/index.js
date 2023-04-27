import React from 'react';
import Home from '../Home/Home';
import Auth from '../../utils/auth';

const Settings = () => {
  const isLoggedIn = Auth.loggedIn();

  if (!isLoggedIn) {
    return <Home />;
  }

  return (
    <>
      <div className="Settings">Settings</div>
    </>
  );
};
 
export default Settings;
