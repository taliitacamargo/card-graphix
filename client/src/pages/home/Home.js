import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PROFILES } from "../../utils/queries";

import "../home/home.css";

const Home = () => {
  return(
    <main>
      <CardBuilder />
    </main>
  );
};

export default Home;
