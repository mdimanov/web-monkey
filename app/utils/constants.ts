export const NAVIGATION = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export type LatestProjectData = {
  id: number;
  title: string;
  url: string;
  specifications: string[];
};

export const LATEST_PROJECTS: { data: LatestProjectData[] } = {
  data: [
    {
      id: 1,
      title: "Online store for yachting enthusiasts",
      url: "/assets/images/yachtbg.jpg",
      specifications: ["Website Application", "E-commerce"],
    },
    {
      id: 2,
      title: "Your accurate weather forecast app",
      url: "/assets/images/show-me-the-weather.jpg",
      specifications: [
        "Mobile Application",
        "Design & Branding",
        "Wheater Data",
      ],
    },
  ],
};
