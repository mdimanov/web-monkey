"use client";
import SingleProject from "./SingleProject";
import useContentfulProjects from "../hooks/useContentfulProjects";

const LatestProjects = () => {
  const projects = useContentfulProjects();

  const latestProjects = projects.slice(0, 2); // Get the first two projects from PROJECTS;

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
      {latestProjects.map((project) => (
        <SingleProject
          key={project.sys.id}
          title={project.fields.title}
          banner={project.fields.banner.fields.file.url}
          url={project.fields.url}
          type={project.fields.type}
          specifications={project.fields.specifications}
          gridSize={2}
        />
      ))}
    </div>
  );
};

export default LatestProjects;
