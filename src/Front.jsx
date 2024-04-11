import React from 'react'
import Home from "./Home.jsx"
import Card1 from "./Card1.jsx";
import Card2 from "./Card2.jsx";
import Card3 from "./Card3.jsx";
import Card4 from "./Card4.jsx";
import Footer from "./Footer.jsx";
export default function Front() {
  return (
    <div>
        <Home/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card1/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card2/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card3/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>
        <Card4/>
        <hr style={{margin:"0" , height:"10px",backgroundColor:"black",opacity:"0.8"}}></hr>

        <Footer/>
    </div>
  );
}
