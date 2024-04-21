import React from "react";
import {Col,Row} from "react-bootstrap";

export default function Footer() {
  return (
    <div className="card" style={{backgroundColor:"black",color:"white"}}>
        <div className="card-body">
            <p style={{marginLeft:"10%"}}>Questions? Call 420696969</p>
            <Row style={{width:"80%",marginLeft:"10%"}}>
                <Col>
                <p><u>FAQ</u></p>
                <p><u>Investor Relations</u></p>
                <p><u>Privacy</u></p>
                <p><u>Speed Test</u></p>
                <select className={Style.dropinp}>
                    <option> English </option>
                    <option> Hindi </option>
                </select>
                </Col>
                <Col>
                <p><u>Help center</u></p>
                <p><u>Jobs</u></p>
                <p><u>Cookie Preferences</u></p>
                <p><u>Legal Noticies</u></p>
                </Col>
                <Col>
                <p><u>Account</u></p>
                <p><u>Ways to Watch</u></p>
                <p><u>Corporate Information</u></p>
                <p><u>Only on Netflix</u></p>
                </Col>
                <Col>
                <p><u>Media Centre</u></p>
                <p><u>Terms of Use</u></p>
                <p><u>Contact Us</u></p>
                </Col>
            </Row>
        </div>
    </div>
  );
}
