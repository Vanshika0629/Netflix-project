import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Col, Row } from "react-bootstrap";

export default function Membership4() {
  return (
    <div>
      <Nav />
      <hr></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div className="py-5">
          <div className="card-body ">
            <Row style={{ width: "100%" }}>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <p
                    style={{
                      display: "flex",
                    }}
                  >
                    STEP 4 OF 5
                  </p>

                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    Which languages do
                  </h1>
                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    you like to watch 
                  </h1>
                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    shows and movies 
                  </h1>

                  <h1
                    style={{
                      display: "flex",
                    }}
                  >
                    in? 
                  </h1>

                  <p>Letting us know helps set up your audio and subtitles.</p>
                  <p>You can always change these</p>
                </div>
                    <Row>
                <Col>
                <p className={{backgroundColor:"grey"}}>  ✓English</p>
                <input type="checkbox" value="Hindi"/>
                <label>Hindi</label><br></br>
                </Col>
                </Row>
                
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
