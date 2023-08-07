import { icon1, icon2, icon3 } from "@/public/assets/images";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
  const certificates = [
    {
      image: icon1,
      year: "March 2020",
      institute: "freecodecamp.org",
      title: "Responsive Web Design",
    },
    {
      image: icon2,
      year: "July 2020",
      institute: "freecodecamp.org",
      title: "JavaScript Algorithms and Data Structures",
    },
    {
      image: icon3,
      year: "Dec 2020",
      institute: "freecodecamp.org",
      title: "Front End Development",
    },
  ];

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          certificates
        </div>
        <div className="line bg-[#333] w-[100px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-2 gap-5 mt-10">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} item={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
