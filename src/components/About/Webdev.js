import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            You will be given Tons of <span className="purple">APIs</span><br/>
             Create an interesting Application with any combination of APIs . You are free to use any other API's or frameworks. 
            <br />
            <br />
            This contest has only one track and is open to all the students. Checkout the prizes section!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
