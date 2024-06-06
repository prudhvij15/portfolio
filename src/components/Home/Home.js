import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import ReactGA from "react-ga4";
import About from "../About/About";

ReactGA.initialize("G-ZQSHP502GJ");

function Home() {
  const Name = "Sree Prudhvi Bharadwaj Jampana";
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-full bg-gray-900" id="home">
        <Particle />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-7/12 mt-32">
              <div className="text-left">
                <h1 className="text-white text-3xl md:text-4xl font-bold">
                  Hi all, I'm {Name} 👋
                </h1>
                <p className="text-white text-xl md:text-2xl mt-4">
                  A passionate Full Stack Software Developer 🚀 having an
                  experience of building Web and Mobile applications with
                  JavaScript / Reactjs / Nodejs / React Native and some other
                  cool libraries and frameworks.
                </p>
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
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
