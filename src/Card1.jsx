import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

export default function Card1() {
  return (
    <>
      <div
        style={{ backgroundColor:"black",color:"white"}}
        className="card"
      >
        <div className="card-body">
        <Row style={{ height:"70vh"}}className="p-5">
          <Col style={{marginTop:"10px"}}className="pt-5">
            <h1 style={{marginLeft:"45px",marginTop:"11px",fontSize:"40px",fontWeight:"bolder",marginRight:"15px"}}>Enjoy on your TV</h1>
            <h4 style={{marginLeft:"45px",fontSize:"27px", marginRight:"15px"}}className="pt-3">
              {" "}
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.{" "}
            </h4>
          </Col>
          <Col
            style={{
              display: "flex",
              alignContent: "right",
              justifyContent: "right",
            }}
          >
            <video
              style={{
                position: "absolute",
                alignItems: "left",
                justifyContent: "left",
                marginTop: "75px",
                marginBottom: "75px",
                marginLeft: "70px",
                marginRight: "99px",
                height: "34vh",
              }}
              autoPlay loop playsInline muted
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            />
            <img style={{marginRight:"31px"}}
              className="p-0"
              height={350}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
          </Col>
        </Row>
      </div>
    </div>
    </>
  );
}
