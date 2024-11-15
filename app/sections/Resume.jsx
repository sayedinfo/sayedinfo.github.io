import EducationAnimation from "../components/animations/EducationAnimation";
import ResumeAnimation from "../components/animations/ResumeAnimation";
import ResumeCard from "../components/ResumeCard";
import { person } from "../data";


const Resume = () => {
  const educations = person.educations;

  const experiences = person.experiences;

  return (
    <div className="mt-20">
      <div className="title text-theme dark:text-white text-5xl text-center capitalize p-5">
        resume
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] w-[95%] mx-auto mt-10">
        <div className="experience lg:flex justify-center xl:gap-14 lg:gap-7 mt-10 lg:mt-0">
          <div className="image">
            <ResumeAnimation />
          </div>
          <div className="exp-content">
            <div className="header mb-10">
              <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
                experience
              </div>
              <div className="line bg-[#333333] w-[100px] h-[2px] mt-1">
                <div className="bg-blue-500 w-[50px] h-[2px]"></div>
              </div>
            </div>
            {experiences.map((experience, index) => (
              <ResumeCard key={index} item={experience} isExperience={true} />
            ))}
          </div>
        </div>
        <div className="education lg:flex lg:flex-row-reverse justify-center xl:gap-14 lg:gap-7 md:mb-0 mb-5 xl:mt-5 lg:mt-14">
          <div className="image -mt-10 mb-10 sm:mb-0">
            <EducationAnimation />
          </div>
          <div className="exp-content">
            <div className="header mb-10">
              <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
                education
              </div>
              <div className="line bg-[#333333] w-[90px] h-[2px] mt-1">
                <div className="bg-blue-500 w-[50px] h-[2px]"></div>
              </div>
            </div>
            {educations.map((education, index) => (
              <ResumeCard key={index} item={education} isExperience={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
