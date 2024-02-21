import SingleProject from "./SingleProject";
import { PROJECTS } from "../utils/constants";
import { ProjectData } from "../utils/constants";

const LatestProjects = () => {
  const LATEST_PROJECTS: { data: ProjectData[] } = {
    data: PROJECTS.data.slice(0, 2), // Get the first two projects from PROJECTS
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
      {LATEST_PROJECTS.data.map((project: ProjectData) => (
        <SingleProject
          key={project.id}
          id={project.id}
          title={project.title}
          banner={project.banner}
          url={project.url}
          specifications={project.specifications}
          gridSize={2}
        />
      ))}
    </div>
  );
};

export default LatestProjects;
