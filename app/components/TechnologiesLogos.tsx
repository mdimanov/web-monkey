import TechnologiesList from "./TechnologiesList";

const TechnologiesLogos = () => {
  return (
    <div className="my-5 md:my-20 py-10">
      <div className="logos-wrapper w-full inline-flex flex-nowrap">
        <TechnologiesList />
        <TechnologiesList />
      </div>
    </div>
  );
};

export default TechnologiesLogos;
