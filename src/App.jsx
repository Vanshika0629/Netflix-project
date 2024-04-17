import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react'
import Front from "./Front.jsx";
import Signup from './Signup.jsx';
import Sign from './Sign.jsx';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path='/signin' element={<Sign/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>    
  )
}
