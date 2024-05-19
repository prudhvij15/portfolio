import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer text-center">
      <Row>
        <Col md="4" className="footer-body">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="flex justify-center p-0">
            <li className="mr-4">
              <a
                href="https://github.com/Prudhvij15"
                target="_blank"
                rel="noreferrer"
                className="icon-colour flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-indigo-600"
              >
                <AiFillGithub className="text-white text-lg" />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="mailto:jampanaprudhvi2@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-indigo-600"
              >
                <AiFillMail className="text-white text-lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/prudhvi-jampana/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-indigo-600"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
