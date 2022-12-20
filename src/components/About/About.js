import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Webdev from "./Webdev";
import { Player } from '@lottiefiles/react-lottie-player';


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* ML competition */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Machine <strong className="purple">Learning</strong> 
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingBottom: "50px" }}
            className="about-img"
          >
           
            <Player 
                src='https://assets5.lottiefiles.com/private_files/lf30_j6bwzbtp.json'
                className="player"
                loop
                autoplay
                />
            
          </Col>
        </Row>
        {/* normal competition */}

        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingBottom: "50px" }}
            className="about-img"
          >
            <Player 
                src='https://assets10.lottiefiles.com/packages/lf20_2glqweqs.json'
                className="player"
                loop
                autoplay
                />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Web <strong className="purple">development</strong> 
            </h1>
            <Webdev/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
