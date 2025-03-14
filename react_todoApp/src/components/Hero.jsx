import React from "react";
import PropTypes from "prop-types";
const Hero = ({ completedTasks, totalTasks }) => {
  return (
    <div className="flex justify-center py-[1em]">
      <div className="border border-stone-400 rounded-lg w-full max-w-[200px]  lg:max-w-[400px] h-full min-h-[100px] lg:min-h-[160px] flex justify-between items-center px-2 py-1 lg:px-4 lg:py-2">
        <div className=" lg:px-3 px-1 text-xl font-bold lg:text-2xl">
          Task Completed
          <p className="text-base">Keep it Up </p>
        </div>
        <div className="">
          <div className="lg:w-24 lg:h-24 w-16 h-16 bg-green-700 rounded-full flex justify-center items-center font-bold text-xl lg:text-3xl">
            {completedTasks}/{totalTasks}
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.PropTypes = {
  completedTasks: PropTypes.number.isRequired,
  totalTasks: PropTypes.number.isRequired,
};
export default Hero;
