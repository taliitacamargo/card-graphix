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
      <div id="top">
        <Link className="logo" to="/">
          <h1>Card Graphix</h1>
        </Link>
          {Auth.loggedIn() ? (
            <div className="container-2">
            <button className="logout section" onClick={logout}>
              Logout
            </button>
            </div>
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
      </div>
    </div>

  );
};

export default Header;
