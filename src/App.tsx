import React from 'react'; 
import './App.css'
import { DashBoard } from './pages/dashboard';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return <BrowserRouter>
 <Routes>
  <Route path="/signup" element = {<Signup></Signup>}/>
  <Route path="/signin" element = {<Signin></Signin>}/>
  <Route path="/DashBoard" element = {<DashBoard></DashBoard>}/>



 </Routes>
  
  
  </BrowserRouter>
}

export default App
