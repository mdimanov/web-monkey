"use client";

import { useState } from "react";
import SingleProject from "./SingleProject";
import Filter from "./Filter";
import { PROJECTS, FilteredType } from "../utils/constants";

const AllProjects = () => {
  const [filter, setFilter] = useState<FilteredType>("all");

  // Filtered projects based on the selected type
  const filteredProjects =
    filter === "all"
      ? PROJECTS.data
      : PROJECTS.data.filter((project) => project.type === filter);

  return (
    <section id="projects">
      <div className="container mx-auto px-6">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-4 md:py-10 py-5">
          {filteredProjects.map((project) => (
            <SingleProject
              key={project.id}
              id={project.id}
              title={project.title}
              banner={project.banner}
              url={project.url}
              type={project.type}
              specifications={project.specifications}
              gridSize={4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
