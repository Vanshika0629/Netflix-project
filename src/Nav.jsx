import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Style from "./front.module.css";
export default function Nav() {
  return (
    <Navbar className="bg-transparent">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end" style={{zIndex:"4"}}>

                <select className={Style.dropinp}>
                    
                    <option>
                        English
                    </option>
                    <option>
                        Hindi
                    </option>
                </select>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
