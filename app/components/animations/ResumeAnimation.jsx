import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/resume.json";

const ResumeAnimation = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-full">
      <Lottie options={options} />
    </div>
  );
};

export default ResumeAnimation;
