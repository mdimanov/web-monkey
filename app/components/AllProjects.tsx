"use client";

import { useState } from "react";
import SingleProject from "./SingleProject";
import Filter from "./Filter";
import { FilteredType } from "../utils/constants";
import useContentfulProjects from "../hooks/useContentfulProjects";

const AllProjects = () => {
  const projects = useContentfulProjects();
  const [filter, setFilter] = useState<FilteredType>("All");

  // Filtered projects based on the selected type
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.fields.type === filter);

  return (
    <section id="projects">
      <div className="container mx-auto px-6">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <SingleProject
                key={project.sys.id}
                title={project.fields.title}
                banner={project.fields.banner.fields.file.url}
                url={project.fields.url}
                type={project.fields.type}
                specifications={project.fields.specifications}
                gridSize={4}
              />
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
