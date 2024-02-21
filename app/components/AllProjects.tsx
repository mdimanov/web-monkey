import SingleProject from "./SingleProject";
import { PROJECTS } from "../utils/constants";

const AllProjects = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
      {PROJECTS.data.map((project) => (
        <SingleProject
          key={project.id}
          id={project.id}
          title={project.title}
          banner={project.banner}
          url={project.url}
          specifications={project.specifications}
          gridSize={4}
        />
      ))}
    </div>
  );
};

export default AllProjects;
