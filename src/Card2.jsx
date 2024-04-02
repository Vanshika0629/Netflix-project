import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Card2() {
  return (
    <div className="card" style={{ background: "black", color: "white" }}>
      <div className="card-body">
        <Row style={{ height: "80vh" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div>
              <img style={{height:"350px"}}src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
              <Row
                style={{
                  border: "solid",
                  position: "absolute",
                  width: "340px",
                  marginLeft: "70px",
                  marginRight: "70px",
                  marginBottom: "70px",
                  marginTop:"-99px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  height: "23%",
                }}
              >
                  <Col style={{margin:"0"}}>
                  <img
                    style={{ width:"68px", height: "80%" }}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                  </Col>
                  <Col>
                  <h6 className="mt-4" style={{fontWeight:"bolder",fontSize:"14px",marginLeft:"-20px"}}>Stranger Things</h6>
                  <h6 className="text-primary" style={{fontSize:"14px",marginLeft:"-20px"}}>Downloading...</h6>
                </Col>
                <Col style={{margin:"0",padding:"0"}}>
                <img style={{
                  height:"9vh",marginLeft:"20px",marginTop:"25px"
                }}src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"/>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "400px",marginRight:"60px" }}>
              <p style={{ fontSize: "50px", fontWeight: "bolder" }}>
                Download your shows to watch offline
              </p>
              <p style={{ fontSize: "25px" }}>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
