import './css/App.css';

import React, { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';


function App() {
  const [currentPage, setCurrentPage] = useState("cardDesign");
  return (
    <div className="App d-flex flex-column h-100 bg-secondary align-items-center justify-content-center">
      <Header setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}


export default App;

