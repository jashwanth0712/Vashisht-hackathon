import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Player } from '@lottiefiles/react-lottie-player';



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        
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
