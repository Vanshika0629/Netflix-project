import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react'
import Front from "./Front.jsx";
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front/>}/>
    </Routes>
    </BrowserRouter>    
  )
}
