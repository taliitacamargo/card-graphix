import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
import Auth from '../../utils/auth';
import { motion } from "framer-motion";



const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
 
  return (
    <div className="Header">
      <motion.div className="top"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
      <Link className="logo" to="/">
        <h1>Card Graphix</h1>
      </Link>
      </motion.div>
        {Auth.loggedIn() ? (
          <div className="container-2">
          <button className="logout section" onClick={logout}>
            Logout
          </button>
          </div>
        ) : (
          <><motion.div className="container-2"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.5 }}
          >
            <Link className="login section" to="/login">
              Login
            </Link>
            <Link className="signup section" to="/signup">
              Signup
            </Link>
            </motion.div>
            
          </>
        )}
    </div>

  );
};

export default Header;
