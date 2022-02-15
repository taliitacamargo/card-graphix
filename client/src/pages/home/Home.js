import React from "react";
import { useQuery } from "@apollo/client";

<<<<<<< HEAD:client/src/pages/Home.js
import CardBuilder from '../components/CardBuilder';

import { QUERY_PROFILES } from "../utils/queries";
=======
import { QUERY_PROFILES } from "../../utils/queries";
>>>>>>> a4f8956a6def455cf427f4d45f828abb65bf186a:client/src/pages/home/Home.js

import "../home/home.css";

const Home = () => {
  return(
    <main>
      <CardBuilder />
    </main>
  );
};

export default Home;
