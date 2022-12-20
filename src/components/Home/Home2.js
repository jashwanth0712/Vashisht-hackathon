import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Player } from '@lottiefiles/react-lottie-player';

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Us </span> 
            </h1>
            <p className="home-about-body">
              We are the <span className="purple">Google Developer Student Club</span> of <span className="yellow">Indian institute of information technology design and manufacturing kancheepuram</span>
              <br />
              <br /><span className="purple">Vashist</span> is IIITDM's Technical Fest, this year we have a lot planned for you
              <br />
             </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <Player 
                src='https://assets5.lottiefiles.com/packages/lf20_iQ8aOXiDJC.json'
                className="player"
                loop
                autoplay
                />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
