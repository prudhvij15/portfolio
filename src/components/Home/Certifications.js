import React from "react";
import awsLogo from "../../Assets/aws.png";
// import infosysLogo from "../../Assets/infosys-logo.png";
const Certifications = () => {
  return (
    <section
      id="certifications"
      className="overflow-x-hidden py-12 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">
          Achievements And Certifications 🏆
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full lg:w-1/2 h-auto">
            <img src={awsLogo} alt="AWS Logo" className="h-40 w-40 mb-4" />
            <h3 className="text-xl font-semibold text-white text-center">
              AWS Certified Solutions Architect
            </h3>
            {/* <p className="text-gray-400 text-center mt-2">
              Completed the AWS Cloud Quest and earned the Cloud Practitioner
              Badge.
            </p> */}
            <div className="text-center mt-4 ">
              <a
                href="https://www.credly.com/badges/bc393eb2-a124-4f2a-b75b-d999709e8bdc/public_url"
                className="block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 no-underline"
              >
                View Certificate
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-full lg:w-1/2 h-auto">
            <img alt="Infosys Logo" className="h-20 mb-4" />
            <h3 className="text-xl font-semibold text-white text-center">
              Infosys Certified Software Programmer
            </h3>
            <p className="text-gray-400 text-center mt-2">
              Certified as Software Programmer from Infosys.
            </p>
            <div className="text-center mt-4 w-full">
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 no-underline">
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
