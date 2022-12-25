import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Player } from '@lottiefiles/react-lottie-player';



function Home() {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              
              <h1 className="heading-name">
                Vashist 
                <strong className="main-name"> Hackathon</strong>
              </h1>
              
              <div style={{textAlign: "left" ,padding:50}}>
                <Type/>
              </div>
              <div  style={{textAlign: "left" ,paddingleft:50}}>
              <div 
                class="apply-button" 
                data-hackathon-slug="vashist" 
                data-button-theme="dark"
                style={{height: "44px" , width: "312px",padding:50,paddingleft:100}}
                ></div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Player
                src='https://assets7.lottiefiles.com/packages/lf20_kv2t8tmz.json'
                className="player"
                loop
                autoplay
                />

            </Col>
          </Row>
        </Container>
      </Container>
      <h1 className="heading-name">
                <strong className="main-name"> Schedule</strong>
              </h1>
            <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
            <Player
                src='https://assets7.lottiefiles.com/packages/lf20_np4isrue.json'
                className="player"
                loop
                autoplay
                />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
            <h1 style={{ fontSize: "2.6em",paddingTop:"25%" }}>
            <span className="yellow" > Will be Declared </span> 
               <span className="purple"> Soon ... </span> 
            </h1>
            </Col>
            
            </Row>
      
      <Home2 />
    </section>
  );
}

export default Home;
