import React, { useState } from "react";
import Signup from "../../pages/Signup/Signup";

function SignUpButton() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <div>
      <button className="signupButton" onClick={handleSignupClick}>Create Account</button>
      {showSignup && <Signup />}
    </div>
  );
}

export default SignUpButton;