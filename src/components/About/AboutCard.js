import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ML Model making competition <br/>Dataset will be given <span className="purple">On the spot </span>
             at the Beginning of the Event .Students can any meaningfull insight or model using that <span className="purple"> dataset</span>
            <br />
            <br />
            There are Two Tracks
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="yellow">Beginner  </span>(1st and 2nd years)
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="yellow">Advanced  </span>(3rd year  and above)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Check out the Prizes Tab to view the Prizes for each track
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
