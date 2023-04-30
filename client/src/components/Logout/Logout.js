import React from "react";
import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate("/login");
  };

  return (
    <button className="logOutBtn" onClick={handleLogout}>
        <FontAwesomeIcon icon={faDoorOpen} color="#F54242" /> 
    </button>
  );
};

export default Logout;