import {
  pdImage1,
  pdImage10,
  pdImage11,
  pdImage12,
  pdImage13,
  pdImage14,
  pdImage2,
  pdImage3,
  pdImage4,
  pdImage5,
  pdImage6,
  pdImage7,
  pdImage8,
  pdImage9,
} from "@/public/assets/images";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TabNav from "./TabNav";

const Works = () => {
  const navItems = ["all", "ecommerce", "react js", "react native"];
  const [active, setActive] = useState(navItems[0]);

  const projects = [
    {
      image: pdImage3,
      name: "B2B Admin",
      url: "https://b2badmin2023.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage1,
      name: "Attendance System",
      url: "https://attendx.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage2,
      name: "B2B SR",
      url: "/android-app1",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage1,
      name: "AttendX",
      url: "https://attendx.netlify.app/",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage13,
      name: "Delivery App",
      url: "/android-app3",
      tag: "react native",
      technology: "react native",
    },
    {
      image: pdImage14,
      name: "B2B SR Order",
      url: "https://b2b-web.netlify.app/",
      tag: "react js",
      technology: "react js",
    },
    {
      image: pdImage4,
      name: "Oikko BD",
      url: "https://www.oikko.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage5,
      name: "One step uk",
      url: "https://www.nextdoorcollection.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage6,
      name: "Vape Cafe",
      url: "https://thevapecafe.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage7,
      name: "Electronics Store",
      url: "https://www.intimacy.com.bd/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage8,
      name: "Gadgets Store",
      url: "https://special.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage9,
      name: "Grocery Store",
      url: "https://grocery.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage10,
      name: "Heal and Care",
      url: "https://healncare.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage11,
      name: "Vape Circle BD",
      url: "https://vapecirclebd.storrea.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
    {
      image: pdImage12,
      name: "Kraos Bangladesh",
      url: "https://www.kraosbangladesh.com/",
      tag: "ecommerce",
      technology: "knockout js",
    },
  ];

  const ecommerces = projects.filter((project) => project.tag === "ecommerce");
  const react_js = projects.filter((project) => project.tag === "react js");
  const react_native = projects.filter(
    (project) => project.tag === "react native"
  );

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          portfolio
        </div>
        <div className="line bg-[#333] w-[80px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="tab-nav mb-10">
          <TabNav navItems={navItems} active={active} setActive={setActive} />
        </div>
        <div className="tab-content mt-10">
          {active === "all" && (
            <div className="all-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "ecommerce" && (
            <div className="ecommerce-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {ecommerces.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "react js" && (
            <div className="react-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {react_js.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
          {active === "react native" && (
            <div className="native-project grid lg:grid-cols-4 grid-cols-2 gap-10">
              {react_native.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
