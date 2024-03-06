export type NavigationItem = {
  name: string;
  href: string;
};

type ProjectType = "code" | "design";
export type FilteredType = ProjectType | "all";

export const NAVIGATION: NavigationItem[] = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export type TechLogoType = {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const TECHNOLOGIES_LOGOS: TechLogoType[] = [
  {
    id: 1,
    src: "/assets/images/nextjs.png",
    width: 160,
    height: 60,
    alt: "Next.js logo",
  },
  {
    id: 2,
    src: "/assets/images/tailwind.png",
    width: 260,
    height: 60,
    alt: "Tailwind CSS logo",
  },
  {
    id: 3,
    src: "/assets/images/react.png",
    width: 160,
    height: 60,
    alt: "React logo",
  },
  {
    id: 4,
    src: "/assets/images/bootstrap.png",
    width: 90,
    height: 90,
    alt: "Bootstrap logo",
  },
  {
    id: 5,
    src: "/assets/images/typescript.png",
    width: 220,
    height: 60,
    alt: "TypeScript logo",
  },
  {
    id: 6,
    src: "/assets/images/wordpress.png",
    width: 220,
    height: 60,
    alt: "WordPress logo",
  },
  {
    id: 7,
    src: "/assets/images/woocommerce.png",
    width: 220,
    height: 60,
    alt: "WooCommerce logo",
  },
];

export type ProjectData = {
  id: number;
  title: string;
  banner: string;
  url?: string;
  type: ProjectType;
  specifications: string[];
};

export const PROJECTS: { data: ProjectData[] } = {
  data: [
    {
      id: 1,
      title: "Online store for yachting enthusiasts",
      banner: "/assets/images/yachtbg.jpg",
      url: "https://yachtbg.com/",
      type: "code",
      specifications: ["Website Application", "E-commerce"],
    },
    {
      id: 2,
      title: "Your accurate weather forecast app",
      banner: "/assets/images/show-me-the-weather.jpg",
      url: "https://play.google.com/store/apps/details?id=com.miroslav.dimanov.weatherapp",
      type: "code",
      specifications: [
        "Mobile Application",
        "Design & Branding",
        "Wheater Data",
      ],
    },
    {
      id: 3,
      title: "Sianamebel furniture manufacturer",
      banner: "/assets/images/sianamebel.jpg",
      url: "https://sianamebel.com/",
      type: "code",
      specifications: ["Website Application", "Design & Branding"],
    },
    {
      id: 4,
      title: "Official distributor of laminated boards",
      banner: "/assets/images/lamina.jpg",
      url: "https://lamina.bg/",
      type: "design",
      specifications: [
        "Website Application",
        "Design & Branding",
        "Products Catalogue",
      ],
    },
  ],
};
