import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import ReactGA from "react-ga4";
import About from "../About/About";

ReactGA.initialize("G-ZQSHP502GJ");

function Home() {
  const Name = "Sree Prudhvi Bharadwaj Jampana";
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="text-left">
                <h1 className="m-0 text-white text-3xl leading-tight ">
                  Hi all, I'm {Name} 👋
                  {/* <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span> */}
                </h1>
                <></>
                <p className="m-0 text-white text-2xl leading-10 mt-3">
                  A passionate Full Stack Software Developer 🚀 having an
                  experience of building Web and Mobile applications with
                  JavaScript / Reactjs / Nodejs / React Native and some other
                  cool libraries and frameworks.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <About />
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
