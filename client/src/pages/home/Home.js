import React from "react";
import { useQuery } from "@apollo/client";

import CardBuilder from '../../components/CardBuilder';
import Instruction from '../../components/Instruction';
import Cloudinary from '../../components/Cloudinary';


import { QUERY_PROFILES } from "../../utils/queries";

import "./home.css";

const Home = () => {
  return(
    <main>
      <CardBuilder />
      <Cloudinary />
      <Instruction />
    </main>
  );
};

export default Home;
