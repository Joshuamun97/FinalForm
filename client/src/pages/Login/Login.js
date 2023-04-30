import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import './Index.scss'
import Popup from '../../components/Popup';

import Auth from '../../utils/auth';
import Signup from '../Signup/Signup';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [buttonPopup, setButtonPopup] = useState(false);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="login">
      <div className="loginWrapper rounded-3">
        <div className="">
          <div className="">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <>
                {error && (
                  <div className="">
                    {error.message}
                  </div>
                )}
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="loginButton"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Log In
                  </button>
                  <hr className='hr' />
                </form>
                <button
                  className="signupButton"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setButtonPopup(true)}
                >
                  Create Account
                </button>

              </>
            )}
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Signup />
      </Popup>
    </main>
  );
};

export default Login;
