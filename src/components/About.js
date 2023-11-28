import React from "react";
import User from "./User.js";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold text-2xl p-2 m-2">About component</div>
      <User />
    </div>
  );
};

export default About;
