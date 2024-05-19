import React from "react";
import skillsSection from "./Portfolio";
import DeveloperActivity from "../../Assets/DeveloperActivity.svg";

function Techstack() {
  return (
    <div className="flex justify-center pb-20">
      <div className="md:flex">
        <div className="md:w-1/2 md:mr-4">
          <img
            src={DeveloperActivity}
            alt="Developer Activity"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2">
          <div className="mt-4 md:mt-0">
            <h2 className="text-xl font-semibold">{skillsSection.title}</h2>
            <p className="text-gray-700">{skillsSection.subTitle}</p>
            <div className="mt-4 md:mt-0 flex items-start">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div key={index} className="mr-2 text-5xl">
                  {skill.icon}
                </div>
              ))}
            </div>
            <div className="ml-0 m-24 mt-3">
              <ul className="list-none flex flex-wrap">
                {skillsSection.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="pr-4 "
                    style={{ whiteSpace: "nowrap" }}
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
