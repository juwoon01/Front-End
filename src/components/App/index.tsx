import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Login from '../Login';

function Hello(){
  return(
    <div className="App">
    <header className="App-header">
      <img src="logo192.png" className="App-logo" alt="logo" />
      <p>
        Hello 행복주택 프로젝트.
      </p>
      <Link to="/login">login</Link>
    </header>
  </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Hello/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
