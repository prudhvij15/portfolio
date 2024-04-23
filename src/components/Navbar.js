import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ReactGA from "react-ga4";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const handleResumeClick = () => {
    // Send event to Google Analytics
    ReactGA.event({
      action: "resume_download",
      category: "Resume",
      label: "Downloaded",
    });
    window.open(
      "https://perosnalmyresume.s3.us-east-2.amazonaws.com/Prudhvi_res.pdf",
      "_blank"
    );
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <a href="/" className="logo">
            <span className="grey-color">&lt; </span>
            <span
              className="logo-name"
              style={{ whiteSpace: "nowrap", color: "white" }}
            >
              Sree Prudhvi Jampana
            </span>
            <span> &gt; </span>
          </a>
        </Navbar.Brand>{" "}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="https://perosnalmyresume.s3.us-east-2.amazonaws.com/Prudhvi_res.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHsDhEOvj9BRaUr1YscNz2YoVa0HILLK7312HhYQ3dP%2FAiEA6TQ%2FqOVRGOjUVeUoEyvksaaVwJJXqYppKkuaJ29JTxYq5AIIPhAAGgw3MzAzMzU1MTgwNzIiDP2fIEhM2vPgg3wKGyrBAnp0jNX7gbNhlyuVV6DMPvbC7wtNuozi36dB3jescXhG3DRB6UcG8M5LY%2FdLogJz7ITZnBepG89jLKVuU%2Fj%2F34N2hzVJXj8%2F7uKJZwcs0LaQEe0PBgeFkKyzmGI%2BkHeWpAyMDh3G9KRtU8S1zoHxwAZHPLJOOZ738a3yp45%2F2sIGmga4t3z23Tz%2BTFacbFntcoVHnL%2BourL9afDZU%2Bhp2A9RrSruSxKjyhHP7HIDtXlN%2FQac7prSRoY2R%2FXDJ4D5xwBkMkLx%2Bqpx8z90fKlWobaipmssFfPHBUKiUSuSL7llm70vU6jSFI0uStOw%2Fpl1iJwqLJsUk%2FEHhFqfPhv8rKZ3KCmcyCsk0OJm6Xw3WfLwFatIp39Fwx0ULOrfNF5CnNvZjrjCk0OnXbuk0452h3PDaADvEUG090vtNA5CJ%2FTDxTC1xJKxBjqzAmZChZitdy6A72wC1FSrqWC5wWScJMV1inzAwa%2Fz%2F43HEnbNUbeNaOyRAP5PF1bEyrSnl20aICgAAcNcV0BpkMxbEg%2FB%2F8CuvPsEseEa1cGPd2ToCODrq249Ay9sHCMRGM9b%2F%2BD%2FKAfnvpnvY9sXFUJSPVW2Y49OYFELoacBhoO1O8ZU9ZVeu%2BzUS6BGqLwlWYUpD5cJwB4tAk4vHoBE0bsmNxWQXhTtiW%2FuOpu13k7HUC%2F%2FjbueDLnRZmcnyDNVi7iMRBYKLIoFjoZCIZhCkltSNYG0M8bFH2KuLl0lT6siUkY27M6WLv599UJVLaEN7p1Sh%2BBRP309fG2b0P%2F79XUx8uTkNijPOFtl4KU1coMA3QUl2vQpdI6%2FYabgxS78UmBqBtBiTSmUhOPNFtR8zBg5XhI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240421T052805Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2UC3DTV4JREHNZUE%2F20240421%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=b31bb6db3570f0342cbd8ad6c4f1a7f1409cd3f2d71c5a0a59a40e09de320867"
                onClick={() => {
                  updateExpanded(false);
                  handleResumeClick();
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/prudhvij15"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
