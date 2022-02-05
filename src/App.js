import './css/App.css';

import React, { useState } from 'react';


import Content from './components/Content';


function App() {
  const [currentPage, setCurrentPage] = useState("login");
  return (
    <div className="App d-flex h-100 bg-dark align-items-center justify-content-center">
      <Content currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}


export default App;

