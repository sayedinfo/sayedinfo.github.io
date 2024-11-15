import Image from "next/image";

const CertificateCard = ({ item }) => {
  const { image, date, institute, title, link } = item;
  return (
    <a
      href={link}
      target="_blank"
      className="certificate flex items-center gap-5 border-2 border-gray-400 dark:border-[#444444] rounded-md mb-4 translate-y-0 transition duration-300 ease-linear hover:shadow-[0_12px_17px_rgba(0,0,0,.12)] hover:cursor-pointer hover:-translate-y-2"
    >
      <div className="image bg-gray-50 dark:bg-[#444444] h-32 md:flex hidden items-center justify-center p-8">
        <Image className="w-20 h-auto" src={image} alt="icon" />
      </div>
      <div className="text p-5">
        <div className="title text-base lg:text-sm text-theme dark:text-[#f5f5f5]">{title}</div>
        <div className="institute text-xs text-theme dark:text-[#777777] capitalize my-2">
          {institute}
        </div>
        <div className="date text-xs text-theme dark:text-[#777777]">{date}</div>
      </div>
    </a>
  );
};

export default CertificateCard;
