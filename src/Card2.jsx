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
                  width: "330px",
                  marginLeft: "70px",
                  marginRight: "70px",
                  marginBottom: "70px",
                  marginTop:"-99px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  height: "15%",
                }}
              >
                  <img
                    style={{ width:"65px", height: "80%" }}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                  <Col>
                  <p className="mt-2" style={{fontWeight:"bold",fontSize:"14px",padding:"0",margin:"0"}}>Stranger Things</p>
                  <p className="text-primary" style={{fontSize:"14px"}}>Downloading...</p>
                </Col>
                <Col></Col>
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
            <div style={{ width: "400px" }}>
              <p style={{ fontSize: "45px", fontWeight: "bolder" }}>
                Download your shows to watch offline
              </p>
              <p style={{ fontSize: "22px" }}>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
