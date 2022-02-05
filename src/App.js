import './css/App.css';

import React, { useState } from 'react';


import Content from './components/Content';
import SignIn from './components/SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState("cardDesign");
  return (
    <div className="App d-flex h-100 bg-dark align-items-center justify-content-center">
      <Content currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

function Login() {
  const [currentPage, setCurrentPage] = useState("cardDesign");
  return (
    <div className="App w-100 h-100 bg-light">
      <SignIn/>
    </div>
  )
};

export default App;
