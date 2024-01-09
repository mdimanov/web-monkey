import { TechLogoType } from "../utils/constants";
import Image from "next/image";

type TechnologyLogoProps = {
  logo: TechLogoType;
};

const TechnologyLogo: React.FC<TechnologyLogoProps> = ({ logo }) => {
  return (
    <li>
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
      />
    </li>
  );
};

export default TechnologyLogo;
