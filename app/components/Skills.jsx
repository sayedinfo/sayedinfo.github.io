import SkillBox from "./SkillBox";

const Skills = () => {
  const skills = {
    programming_language: [
      { name: "Javascript", percentage: "85%", width: "w-[85%]" },
      { name: "Ruby", percentage: "50%", width: "w-[50%]" },
      { name: "ES6", percentage: "90%", width: "w-[90%]" },
      { name: "Map API", percentage: "70%", width: "w-[70%]" },
    ],
    javaScript_library: [
      { name: "React Js", percentage: "80%", width: "w-[80%]" },
      { name: "React Native & Next Js", percentage: "50%", width: "w-[50%]" },
      // { name: "Next Js", percentage: "50%", width: "w-[50%]" },
      { name: "Knockout Js", percentage: "90%", width: "w-[90%]" },
      { name: "JWT", percentage: "80%", width: "w-[80%]" },
    ],
    frontend: [
      { name: "Tailwind CSS", percentage: "90%", width: "w-[90%]" },
      { name: "Bootstrap", percentage: "95%", width: "w-[95%]" },
      { name: "MUI", percentage: "80%", width: "w-[80%]" },
      { name: "JSON", percentage: "85%", width: "w-[85%]" },
      { name: "Chart Js", percentage: "80%", width: "w-[80%]" },
    ],
    backend: [
      { name: "Node Js", percentage: "75%", width: "w-[75%]" },
      { name: "Express Js", percentage: "75%", width: "w-[75%]" },
      { name: "MongoDB", percentage: "80%", width: "w-[80%]" },
      { name: "Firebase", percentage: "85%", width: "w-[85%]" },
      { name: "Rest API", percentage: "90%", width: "w-[90%]" },
    ],
    tools: [
      { name: "Git", percentage: "95%", width: "w-[95%]" },
      { name: "Figma", percentage: "65%", width: "w-[65%]" },
      { name: "Zoho Sprint", percentage: "90%", width: "w-[90%]" },
      { name: "Photoshop", percentage: "50%", width: "w-[50%]" },
    ],
    languages: [
      { name: "English", percentage: "90%", width: "w-[90%]" },
      { name: "Spanish", percentage: "30%", width: "w-[30%]" },
      { name: "German", percentage: "50%", width: "w-[50%]" },
      { name: "Hindi", percentage: "70%", width: "w-[60%]" },
    ],
  };

  const {
    programming_language,
    javaScript_library,
    frontend,
    backend,
    tools,
    languages,
  } = skills;

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          skills
        </div>
        <div className="line bg-[#333] w-[60px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-2 gap-10 mt-10">
        <SkillBox title="programming" skills={programming_language} />
        <SkillBox title="javascript library" skills={javaScript_library} />
        <SkillBox title="frontend" skills={frontend} />
        <SkillBox title="backend" skills={backend} />
        <SkillBox title="tools" skills={tools} />
        <SkillBox title="languages" skills={languages} />
      </div>
    </div>
  );
};

export default Skills;
