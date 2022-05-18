import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import SignIn from '../SignIn';
import Home from '../main/Home';
import SignUp from '../SignUp';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
