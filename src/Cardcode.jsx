import Card from "react-bootstrap/Card";
import style from "./CardCss.module.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Cardcode() {
  return (
    <>
    <div class="card">
      <Row className="p-5">
        <Col className="pt-4">
          <h1>Enjoy on your TV</h1>
          <p className="pt-3">
            {" "}
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.{" "}
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
            style={{ position: "absolute" }}
            autoPlay
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          />
        </Col>
      </Row>
    </div>
    </>
  );
}
