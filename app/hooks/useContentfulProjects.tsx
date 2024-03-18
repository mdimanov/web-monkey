// useContentfulProjects.js

import { useState, useEffect } from "react";
import { ContentfulProject } from "../utils/constants";

const useContentfulProjects = () => {
  const contentful = require("contentful");

  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const [projects, setProjects] = useState<ContentfulProject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProjects();
      setProjects(result);
    };

    fetchData();
  });

  const getProjects = async () => {
    const projectsData = await client.getEntries();
    return projectsData.items;
  };

  return projects;
};

export default useContentfulProjects;
