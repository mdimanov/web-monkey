import { TECHNOLOGIES_LOGOS } from "../utils/constants";
import TechnologyLogo from "./TechnologyLogo";

const TechnologiesList = () => {
  return (
    <ul
      x-ref="logos"
      className="logos-infiite-animation flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none"
    >
      {TECHNOLOGIES_LOGOS.map((logo) => (
        <TechnologyLogo key={logo.id} logo={logo} />
      ))}
    </ul>
  );
};

export default TechnologiesList;
