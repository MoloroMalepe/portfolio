import Image from "next/image";
import Skills from "../skills/page";
import Experience from "../experience/page";
import JourneyOne from "../journeyOne/page";
import JourneyTwo from "../journeyTwo/page";
import JourneyThree from "../journeyThree/page";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="p-5 text-3xl font-semibold text-gray-800 underline">
          My Journey
        </p>
        <div className="flex flex-row">
          <div className="w-1/2 pr-4">
            <JourneyOne />
            <JourneyThree />
          </div>
          <div className="w-1/2 flex flex-col justify-center pr-4">
            <JourneyTwo />
          </div>
        </div>
        <Experience />
      </div>
    </>
  );
};

export default About;
