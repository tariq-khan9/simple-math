import React from "react";
import play from "./../../../images/play.png";
const ViewTutorial = () => {
  return (
    <div className="buttons-div w-100 h-10 md:h-14 bg-gray-200 border-l-4 border-gray-500 mt-8 rounded-md flex items-center justify-start ">
      <button className="flex flex-row items-center px-2 md:px-4">
        <img className="w-6 h-6 md:w-10 md:h-10" src={play} alt="play" />
        <span className="font-inter text-[8px] md:text-[16px] ml-1 md:ml-2">
          View Our Tutorial - Quick tips to complete this exercise
        </span>
      </button>
    </div>
  );
};

export default ViewTutorial;
