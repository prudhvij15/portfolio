import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Sree Prudhvi Bharadwaj </span>
            from <span className="purple"> United States.</span>
            <br />
            <br />
            I have completed my Master's in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Languages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Create with purpose and impact.{" "}
          </p>
          <footer className="blockquote-footer">Prudhvi</footer>
        </blockquote>
      </Card.Body>
      {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={9} className="project-card">
          <ProjectCards
            imgPath={crypto}
            isBlog={false}
            title="Cryptocatalog"
            description="I developed a cryptocurrency data
            aggregator application using React.js, Tailwind. This application
            fetches real-time data for various cryptocurrencies and displays it
            in an intuitive user interface. Additionally, I integrated real-time
            charts to provide users with visual insights into cryptocurrency
            trends."
            ghLink="https://github.com/prudhvij15/crypto-tracker"
            demoLink="https://cryptocatalog.netlify.app/"
          />
        </Col>
      </Row> */}
    </Card>
  );
}

export default AboutCard;
