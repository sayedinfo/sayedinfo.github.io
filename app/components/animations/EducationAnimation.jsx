import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/education.json";

const EducationAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const width = windowWidth > 600 ? 500 : "100%";
  const height = windowWidth > 600 ? 500 : "100%";

  return (
    <div className="w-full">
      <Lottie options={options} width={width} height={height} />
    </div>
  );
};

export default EducationAnimation;
