import React from "react";
import Card from "react-bootstrap/Card";
import style from "./CardCss.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Cardcode() {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white" }}
        className="card"
      >
        <Row className="p-5">
          <Col className="pt-5">
            <h1 style={{fontSize:"38px",fontStyle:"bold"}}>Enjoy on your TV</h1>
            <p style={{fontSize:"27px"}}className="pt-3">
              {" "}
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.{" "}
            </p>
          </Col>
          <Col
            style={{
              display: "flex",
              alignContent: "right",
              justifyContent: "right",
            }}
          >
            <img
              className="p-0"
              height={350}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <video
              style={{
                position: "absolute",
                alignItems: "left",
                justifyContent: "left",
                marginTop: "75px",
                marginBottom: "75px",
                marginLeft: "70px",
                marginRight: "70px",
                height: "34vh",
              }}
              autoPlay
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
