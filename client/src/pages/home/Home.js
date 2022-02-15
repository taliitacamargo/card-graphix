import React from "react";
import { useQuery } from "@apollo/client";

import CardBuilder from '../../components/CardBuilder';

import { QUERY_PROFILES } from "../../utils/queries";

import "./home.css";

const Home = () => {
  return(
    <main>
      <CardBuilder />
    </main>
  );
};

export default Home;
