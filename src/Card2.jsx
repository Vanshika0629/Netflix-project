import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Card2() {
  return (
    <div className="card" style={{ background: "black", color: "white" }}>
      <div className="card-body">
        <Row style={{ height: "70vh" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
              <Row
                style={{
                  border: "solid",
                  position: "absolute",
                  width: "400px",
                  marginLeft: "100px",
                  bottom: "80px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  height: "14%",
                }}
              ></Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
