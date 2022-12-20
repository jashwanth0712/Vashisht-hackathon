import React from "react";
import Techstack from "../About/Techstack";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import { Player } from '@lottiefiles/react-lottie-player';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
          Awesome <strong className="purple">Prizes </strong> worth 20k🎉
        </h1>
        <p style={{ color: "white" }}>
          Checkout various Tracks and events 
        </p> */}
        <Row>
        <Col
            style={{ paddingBottom: "50px" ,alignItems:"center",justifySelf:"center"}}
            className="about-img"
          >
           
            <Player 
                src='https://assets5.lottiefiles.com/packages/lf20_10jxod3a.json'
                className="player"
                loop
                autoplay
                />
             
          </Col>
          
        </Row>
         
        
      </Container>
    </Container>
  );
}

export default Projects;
