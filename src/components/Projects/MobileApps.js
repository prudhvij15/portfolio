import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import JournalAppImage from "../../Assets/journal-app.gif";

function MobileApps() {
  const apps = [
    {
      title: "Journal App",
      description:
        "A journal taking app built using React Native where users can add images and text to their journal entries. Users can also add locations for a journal entry.",
      image: JournalAppImage,
      githubLink: "https://github.com/prudhvij15/journal-app",
    },
  ];

  return (
    <Container
      fluid
      className="project-section"
      style={{ backgroundColor: "#121212", padding: "2rem 0" }}
    >
      <Container>
        <h2 style={{ color: "white", marginBottom: "2rem" }}>Mobile Apps</h2>
        <div className="d-flex flex-wrap">
          {apps.map((app, index) => (
            <div
              key={index}
              className={`p-2 ${
                apps.length > 1 ? "col-12 col-md-6" : "col-12"
              }`}
            >
              <Card className="mb-4 bg-dark text-white">
                <div
                  className="overflow-hidden d-flex align-items-center justify-content-center"
                  style={{ height: "400px" }}
                >
                  <Card.Img
                    variant="top"
                    src={app.image}
                    alt={app.title}
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{app.title}</Card.Title>
                  <Card.Text>{app.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={app.githubLink}
                    target="_blank"
                  >
                    View Code
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default MobileApps;
