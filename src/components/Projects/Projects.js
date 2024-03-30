import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/cryptocataglo.png";
import cinelist from "../../Assets/Projects/cinelist.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptocatalog"
              description="I developed a cryptocurrency data aggregator application using React.js, Tailwind. This application fetches real-time data for various cryptocurrencies and displays it in an intuitive user interface. Additionally, I integrated real-time charts to provide users with visual insights into cryptocurrency trends."
              ghLink="https://github.com/prudhvij15/crypto-tracker"
              demoLink="https://cryptocatalog.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mailchimp Events API"
              description="Developed a streamlined integration between a React.js frontend and an Express.js backend to facilitate the posting of events to the Mailchimp Events API. This integration enables seamless communication and data transmission between applications."
              ghLink="https://github.com/prudhvij15/mailchimp-event-api"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinelist}
              isBlog={false}
              title="Cine-list"
              description="Created a dynamic movie listing application using the TMDB (The Movie Database) API, providing users with a seamless experience to discover and explore movies. This project utilizes React.js for the frontend development, enabling a responsive and interactive interface."
              ghLink="https://github.com/prudhvij15/cine-list"
              demoLink="https://cine-list0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Git Insights"
              description="The GitHub User Analytics Dashboard is a web application that allows users to search for GitHub users and visualize their data using various charts like pie charts and bar charts."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
