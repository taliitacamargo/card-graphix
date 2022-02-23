import React from "react";
import './intro.css';

import CardBuilder from '../../components/CardBuilder';

const Intro = () => {
  return (
    <main>
      <div className="container-intro">
        <p className="intro">"Create Your Perfect Business Card"</p>
      </div>
      <CardBuilder />
    </main>
  );
};

export default Intro;