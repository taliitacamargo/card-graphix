import React from "react";
import { useQuery } from "@apollo/client";
import Instruction from '../../components/Instruction';


import { QUERY_PROFILES } from "../../utils/queries";

import "./home.css";


const Home = () => {
  return(
    
    <main>
      <Instruction />
    </main>
  );
};

export default Home;
