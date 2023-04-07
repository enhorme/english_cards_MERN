import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { selectActiveFilter, selectSortDirection } from "../store/selectors";
import { changeFilter } from "../store/userSlice";

const ModuleFilter = () => {
  const filters = [
    { value: "all", label: "All" },
    { value: "created-at", label: "CreatedAt" },
    { value: "cards-count", label: "Cards Count" },
  ];

  const activeFilter = useSelector(selectActiveFilter);
  const direction = useSelector(selectSortDirection);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    dispatch(
      changeFilter({
        activeFilter: selectedFilter,
        direction: "up", // Set default direction when changing filters
      })
    );
  };

  const handleDirectionChange = () => {
    dispatch(
      changeFilter({
        activeFilter,
        direction: direction === "up" ? "down" : "up",
      })
    );
  };

  return (
    <div className="module-filter">
      <select value={activeFilter} onChange={handleFilterChange}>
        {filters.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>
      <button onClick={handleDirectionChange}>
        {direction === "up" ? <FaSortAmountUp /> : <FaSortAmountDown />}
      </button>
    </div>
  );
};

export default ModuleFilter;
