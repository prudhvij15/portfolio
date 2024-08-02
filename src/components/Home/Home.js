import React, { useState } from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import ReactGA from "react-ga4";
import About from "../About/About";
import Certifications from "./Certifications";

ReactGA.initialize("G-ZQSHP502GJ");

const Home = () => {
  const Name = " Prudhvi";
  const [showResume, setShowResume] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setShowResume(false);
    }
  };

  return (
    <>
      <section className="overflow-x-hidden">
        <div className="w-full h-full bg-gray-900" id="home">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-7/12 mt-32">
                <div className="text-left">
                  <h1 className="text-white text-2xl md:text-3xl font-semibold">
                    Hi all, I'm {Name} 👋
                  </h1>
                  <p className="text-white text-xl md:text-2xl mt-4">
                    A passionate Full Stack Software Developer 🚀 having an
                    experience of building Web and Mobile applications with
                    JavaScript / Reactjs / Nodejs / React Native and some other
                    cool libraries and frameworks.
                  </p>
                </div>
                <div className="text-left mt-8">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setShowResume(true)}
                  >
                    See My Resume
                  </button>
                </div>
              </div>

              <div className="md:w-5/12 mt-8 md:mt-0">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <About />
        <Certifications />
        <Particle />
        {showResume && ( // Conditional rendering of iframe
          <div
            id="overlay"
            onClick={handleOverlayClick}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1050, // Ensure the iframe is above other elements
            }}
          >
            <div style={{ position: "relative", width: "80%", height: "100%" }}>
              <iframe
                src="https://my-personal-resume01.s3.us-east-2.amazonaws.com/FullStack.pdf"
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Resume"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
