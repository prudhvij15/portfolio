import React from "react";
import skillsSection from "./Portfolio";
import DeveloperActivity from "../../Assets/DeveloperActivity.svg";

function Techstack() {
  return (
    <div className="flex flex-col items-center pb-20 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0 flex justify-center">
          <img
            src={DeveloperActivity}
            alt="Developer Activity"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold break-words">
              {skillsSection.title}
            </h2>
            <p className="text-gray-400 md:text-base lg:text-lg xl:text-sm">
              {skillsSection.subTitle}
            </p>
            <div className="mt-4 flex justify-center md:justify-start flex-wrap">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div
                  key={index}
                  className="mr-2 text-3xl md:text-4xl lg:text-5xl p-2 text-gray-500"
                >
                  {skill.icon}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <ul className="list-none flex flex-wrap justify-center md:justify-end text-lg">
                {skillsSection.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="pr-4"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
