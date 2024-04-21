import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "./front.module.css";
import img from "./assets/Netflix.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <Navbar className="bg-transparent" style={{height:"100px"}}>
        <Container>
            <Navbar.Brand href="#home"><Link to="/"><img src={img} style={{height:"150px",width:"150px"}}/></Link></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end" style={{zIndex:"4"}}>

                <select className={Style.dropinp}>
                    
                    <option>
                        English
                    </option>
                    <option>
                        Hindi
                    </option>
                </select>
                <Link to='signin' className="btn mx-3" style={{backgroundColor:"red",color:"white",width:"85px"}}> <b>Sign In</b></Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
