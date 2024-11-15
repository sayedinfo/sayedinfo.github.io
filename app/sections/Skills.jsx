import { useState } from "react";
import { SkillList } from "../components/SkillList";
import TabNav from "../components/TabNav";
import { person } from "../data";

const Skills = () => {
  const navItems = [
    "all",
    "programming",
    "frontend",
    "backend",
    "platforms",
    "tools",
    "others",
  ];
  const [active, setActive] = useState(navItems[0]);
  const {
    all,
    languages,
    js_frameworks,
    css_libraries,
    backend,
    platforms,
    tools,
    others,
  } = person.skills;

  const frontend = js_frameworks.concat(css_libraries);

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
          skills
        </div>
        <div className="line bg-[#333333] w-[60px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto mt-10">
        <div className="tab-nav mb-10">
          <TabNav navItems={navItems} active={active} setActive={setActive} />
        </div>
        <div className="tab-content mt-10">
          {active === "all" && <SkillList data={all} />}
          {active === "programming" && <SkillList data={languages} />}
          {active === "frontend" && <SkillList data={frontend} />}
          {active === "backend" && <SkillList data={backend} />}
          {active === "platforms" && <SkillList data={platforms} />}
          {active === "tools" && <SkillList data={tools} />}
          {active === "others" && <SkillList data={others} />}
          {active === "languages" && <SkillList data={languages} />}
        </div>
      </div>
    </div>
  );
};

export default Skills;
