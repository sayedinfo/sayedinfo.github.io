const SkillBox = ({ title, skills }) => {
  return (
    <>
      <div className="skill-box">
        <div className="header mb-5">
          <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
            {title}
          </div>
        </div>
        <div className="skill-content">
          {skills.map((skill, index) => (
            <div className="mb-3" key={index}>
              <div className="label flex items-center justify-between">
                <div className="name text-theme dark:text-white text-sm">{skill.name}</div>
                {!skill.label && (
                  <div className="percentage text-[#888] text-xs">
                    {skill.percentage}
                  </div>
                )}
              </div>
              <div className="progress">
                <div className="line bg-gray-300 dark:bg-[#333333] w-full h-2.5 border-2 border-gray-400 dark:border-[#444444] rounded-lg mt-1">
                  <div
                    className={`bg-blue-500 relative ${skill.width} h-1.5 rounded-lg`}
                  >
                    <div className="label absolute -top-6 right-0 text-theme dark:text-[#888888] text-xs">
                      {skill.label}
                    </div>
                  </div>
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
