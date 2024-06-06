import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { Button } from "react-bootstrap";

const NavBar = ({ iframeOpen }) => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [navbarClass, updateNavbarClass] = useState("navbar");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Update navbar class based on iframeOpen prop
  React.useEffect(() => {
    updateNavbarClass(iframeOpen ? "navbar-behind-iframe" : "navbar");
  }, [iframeOpen]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : navbarClass}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <a href="/" className="logo">
            <span className="grey-color">&lt; </span>
            <span className="logo-name" style={{ color: "white" }}>
              Sree Prudhvi Jampana
            </span>
            <span> &gt; </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <NavItemWithIcon
              icon={<AiOutlineHome />}
              text="Home"
              to="/"
              onClick={() => updateExpanded(false)}
            />
            <NavItemWithIcon
              icon={<AiOutlineFundProjectionScreen />}
              text="Projects"
              to="/project"
              onClick={() => updateExpanded(false)}
            />
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
};

const NavItemWithIcon = ({ icon, text, to, onClick }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        to={to}
        onClick={onClick}
        className="dark:text-black flex items-center"
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2">{text}</span>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavBar;
