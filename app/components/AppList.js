import AppCard from "./AppCard";

export const AppList = ({ dataList }) => {
  return (
    <div className="projects grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
      {dataList.map((project) => (
        <AppCard key={project.id} item={project} />
      ))}
    </div>
  );
};
