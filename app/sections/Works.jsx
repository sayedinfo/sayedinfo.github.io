import { useState } from "react";
import { AppList } from "../components/AppList";
import TabNav from "../components/TabNav";
import { person } from "../data";

const Works = () => {
  const navItems = ["all", "ecommerce", "react js", "react native"];
  const [active, setActive] = useState(navItems[0]);


  const ecommerces = person.projects.filter(
    (project) =>
      project.platform === "web" &&
      project.tag.some((item) => item === "eCommerce")
  );
  const react_js = person.projects.filter(
    (project) =>
      project.platform === "web" &&
      project.tag.some((item) => item === "React Js")
  );
  const react_native = person.projects.filter(
    (project) =>
      project.platform === "android" &&
      project.tag.some((item) => item === "React Native")
  );

  const tabs = [
    { id: 1, title: "all", content: <AppList dataList={person.projects} /> },
    { id: 2, title: "ecommerce", content: <AppList dataList={ecommerces} /> },
    { id: 3, title: "react js", content: <AppList dataList={react_js} /> },
    { id: 4, title: "react native", content: <AppList dataList={react_native} /> },
  ];

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
          portfolio
        </div>
        <div className="line bg-[#333333] w-[80px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="tab-nav mb-10">
          <TabNav navItems={navItems} active={active} setActive={setActive} />
        </div>
        <div className="tab-content mt-10">
          {active === "all" && <AppList dataList={person.projects} />}
          {active === "ecommerce" && <AppList dataList={ecommerces} />}
          {active === "react js" && <AppList dataList={react_js} />}
          {active === "react native" && <AppList dataList={react_native} />}
        </div>
      </div>
    </div>
  );
};

export default Works;
