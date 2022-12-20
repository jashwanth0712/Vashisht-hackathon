import React, { useState, useEffect } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Techstack from "../About/Techstack";
import { Player } from '@lottiefiles/react-lottie-player';


const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
        <Col
            md={10}
            style={{ paddingBottom: "50px",justifyContent:"center" }}
            className="about-img"
          >
            <Player 
                src='https://assets2.lottiefiles.com/packages/lf20_4s3kvfcn.json'
                className="player"
                loop
                autoplay
                />
            
          </Col>
    </div>
  );
}

export default ResumeNew;
