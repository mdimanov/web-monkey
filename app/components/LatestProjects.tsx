import SingleLatestProject from "./SingleLatestProject";
import { LATEST_PROJECTS } from "../utils/constants";

const LatestProjects = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
        {LATEST_PROJECTS.data.map((project) => (
          <SingleLatestProject
            key={project.id}
            id={project.id}
            title={project.title}
            url={project.url}
            specifications={project.specifications}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
