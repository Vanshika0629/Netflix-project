import { useState } from 'react'
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx"
import Membership1 from "./Membership1.jsx"
import Membership2 from "./Membership2.jsx"
import Membership3 from "./Membership3.jsx"
import {useLocation} from "react-router-dom";

export default function Member() {
  const [member,setMember]=useState(1)
  const [pro,setpro]=useState(1)
  const loction = useLocation();
  console.log(loction.state)
  let mail = loction.state
  function changeMember(data){
    setMember(data)
  }
  function handlepro(data){
    setpro(data)
  }
    return (
    
    <>

    <Nav mail={mail} change ={true}/> 
    {member===1 && (<Membership1 p={changeMember} />)} 
    {member===2 && (<Membership2 p={changeMember} />)} 
    {member===3 && (<Membership3 p={changeMember} />)} 
    
         

    </>
  )
}
