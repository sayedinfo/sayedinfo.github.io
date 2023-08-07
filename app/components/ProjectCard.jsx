import Image from "next/image";

const ProjectCard = ({ project }) => {
  const { image, name, url, tag } = project;
  return (
    <div className="project group relative overflow-hidden">
      <Image
        width={350}
        height={400}
        className="w-full object-cover"
        src={image}
        alt="project image"
      />
      <div
        className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 
      opacity-0 group-hover:h-full group-hover:opacity-100 duration-500"
      >
        <h1 className="text-2xl text-white">{name}</h1>
        <a
          className="bg-amber-400 text-white rounded-full mt-5 px-8 py-3 hover:bg-amber-600 duration-300"
          href={url}
          target="_blank"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
