import React from 'react'
import Home from "./Home.jsx"
import Card1 from "./Card1.jsx";
import Card2 from './Card2.jsx';

export default function Front() {
  return (
    <div>
        <Home/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card1/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card2/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
    </div>
  )
}
