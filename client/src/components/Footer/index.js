import React from 'react';

import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5" >
        <h4>&copy; {new Date().getFullYear()} Card Graphix. All rights reserved. &nbsp;</h4>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
