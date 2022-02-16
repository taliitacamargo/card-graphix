import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="Header">
      <Link className="logo" to="/">
        <h1>Card Graphix</h1>
      </Link>
        {Auth.loggedIn() ? (
          <button className="logout" onClick={logout}>
            Logout
          </button>
        ) : (
          <><div className="container-2">
            <Link className="login section" to="/login">
              Login
            </Link>
            <Link className="signup section" to="/signup">
              Signup
            </Link>
            </div>
          </>
        )}
      <div className="container">
        <p className="intro">"Create Your Perfect Business Card"</p>
      </div>
    </div>

  );
};

export default Header;
