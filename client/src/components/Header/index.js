import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <div className="Header flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Card Graphix
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Create Your Perfect Buisness Card
        </p>
        <div>
          {Auth.loggedIn() ? (
            <button className="LogoutBtn btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="LoginBtn btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="SignupBtn btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
  );
};

export default Header;
