import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Card3() {
  return (
    <div className="card" style={{ backgroundColor: "black", color: "white" }}>
      <div className="card-body">
        <Row style={{ height: "70vh" }}>
          <Col style={{ marginTop: "80px" }}>
            {" "}
            <center>
              <div style={{ fontSize: "44px", fontWeight: "bolder" }}>
                Watch everywhere
              </div>
            </center>
            <h4 style={{ marginLeft: "110px", marginTop: "8px" }}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </Col>
          <Col>
            <img
              style={{ height: "65vh" }}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            />
            <video
              style={{
                position: "absolute",
                marginTop: "45px",
                height: "150px",
                width: "300px",
                marginLeft: "-390px", 
              }}
              autoPlay
              playsInline
              muted
              loop
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
