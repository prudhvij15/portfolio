import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ReactGA from "react-ga4";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
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
    ReactGA.event({
      action: "resume_download",
      category: "Resume",
      label: "Downloaded",
    });
    window.open(
      "https://my-personal-resume01.s3.us-east-2.amazonaws.com/FullStack.pdf",
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
            <NavItemWithIcon
              icon={<CgFileDocument />}
              text="Resume"
              to="/"
              onClick={() => {
                updateExpanded(false);
                handleResumeClick();
              }}
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
}

// Custom NavItem component to render an icon and text together
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
