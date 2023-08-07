import { expImage, eduImage } from "@/public/assets/images";
import ResumeCard from "./ResumeCard";
import Image from "next/image";

const Resume = () => {
  const educations = [
    {
      year: "2011 - 2015",
      institute: "american international university-bangladesh",
      title: "BSc. Computer Science",
    },
    {
      year: "2009 - 2011",
      institute: "govt. adamjeenagar m w college",
      title: "HSC (Science)",
    },
    {
      year: "2007 - 2009",
      institute: "m w high school",
      title: "SSC (Science)",
    },
  ];

  const experiences = [
    {
      year: "Jan 2023 - Present",
      institute: "ACI Logistics Ltd.",
      title: "Software Engineer (Full Stack)",
    },
    {
      year: "Dec 2017 - Dec 2022",
      institute: "Storrea Ltd.",
      title: "Software Engineer (Frontend)",
    },
    {
      year: "Feb 2017 - Oct 2017",
      institute: "Ennvisio Digital Ltd.",
      title: "Web Designer",
    },
    {
      year: "Mar 2015 - Dec 2015",
      institute: "american international university-bangladesh",
      title: "Lab Assistant",
    },
  ];

  return (
    <div className="mt-20">
      <div className="title text-white text-5xl text-center capitalize p-5">
        resume
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] w-[95%] mx-auto mt-10">
        <div className="experience lg:flex justify-center xl:gap-14 lg:gap-7 mt-10 lg:mt-0">
          <div className="image">
            <Image src={expImage} alt="expImage" />
          </div>
          <div className="exp-content">
            <div className="header mb-10">
              <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
                experience
              </div>
              <div className="line bg-[#333] w-[100px] h-[2px] mt-1">
                <div className="bg-blue-500 w-[30px] h-[2px]"></div>
              </div>
            </div>
            {experiences.map((experience, index) => (
              <ResumeCard key={index} item={experience} isExperience={true} />
            ))}
          </div>
        </div>
        <div className="education lg:flex lg:flex-row-reverse justify-center xl:gap-14 lg:gap-7 md:mb-0 mb-5">
          <div className="image">
            <Image src={eduImage} alt="expImage" />
          </div>
          <div className="exp-content">
            <div className="header mb-10">
              <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
                education
              </div>
              <div className="line bg-[#333] w-[90px] h-[2px] mt-1">
                <div className="bg-blue-500 w-[30px] h-[2px]"></div>
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
