import React from "react";
import './intro.css';

import Cloudinary from '../../components/Cloudinary';
import CardBuilder from '../../components/CardBuilder';

const Intro = () => {
  return (
    <main>
      <div className="container-intro">
        <p className="intro">"Create Your Perfect Business Card"</p>
      </div>
      <CardBuilder />
      <Cloudinary />
    </main>
  );
};

export default Intro;