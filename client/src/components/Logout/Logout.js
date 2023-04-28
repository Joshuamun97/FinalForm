import React from "react";
import Auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;