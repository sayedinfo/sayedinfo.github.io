const SkillBox = ({ title, skills }) => {
  console.log(skills);
  return (
    <>
      <div className="skill-box">
        <div className="header mb-5">
          <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
            {title}
          </div>
        </div>
        <div className="skill-content">
          {skills.map((skill, index) => (
            <div className="mb-3" key={index}>
              <div className="lable flex items-center justify-between">
                <div className="name text-white text-[13px]">{skill.name}</div>
                <div className="percentage text-[#888] text-[11px]">
                  {skill.percentage}
                </div>
              </div>
              <div className="progress">
                <div className="line bg-[#333] w-full h-2 border-2 border-[#444] rounded-lg mt-1">
                  <div
                    className={`bg-blue-500 ${skill.width} h-1 rounded-lg`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillBox;
