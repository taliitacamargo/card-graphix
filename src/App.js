import React, { useState } from 'react';

import './App.css';

import Content from './components/Content';

function App() {
  const [currentPage, setCurrentPage] = useState("cardDesign");
  return (
    <div className="App w-100 h-100 bg-dark">
      <Content currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
