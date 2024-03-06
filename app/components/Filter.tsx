import { FilteredType } from "../utils/constants";

type Props = {
  filter: FilteredType;
  setFilter: React.Dispatch<React.SetStateAction<FilteredType>>;
};

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const handleFilterChange = (filterType: FilteredType) => {
    setFilter(filterType);
  };

  const filterOptions: FilteredType[] = ["all", "code", "design"];

  return (
    <div className="filter-row pb-20">
      {filterOptions.map((filterType) => (
        <div
          key={filterType}
          className={`pill-outline ${
            filter === filterType ? "active" : ""
          } text-sm font-semibold leading-6 text-white`}
          onClick={() => handleFilterChange(filterType)}
        >
          {filterType}
        </div>
      ))}
    </div>
  );
};

export default Filter;
