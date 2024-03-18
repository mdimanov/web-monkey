export type NavigationItem = {
  name: string;
  href: string;
};

export type ProjectType = "Code" | "Design";
export type FilteredType = ProjectType | "All";

export const NAVIGATION: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
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
  title: string;
  banner: string;
  url?: string;
  type: ProjectType;
  specifications: string[];
};

type ContentfulProjectSys = {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  revision: number;
  contentType: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  locale: string;
};

type ContentfulProjectFields = {
  title: string;
  banner: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  url?: string;
  type: ProjectType;
  specifications: string[];
};

export type ContentfulProject = {
  fields: ContentfulProjectFields;
  sys: ContentfulProjectSys;
};
