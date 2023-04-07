import React from "react";
import { useSelector } from "react-redux";
import { selectModulesByFilter } from "../store/selectors";
import { useNavigate } from "react-router-dom";
import ModuleListItem from "./ModueListItem";
import ModuleFilter from "./ModuleFilter";

const ModuleList = () => {
  const modules = useSelector(selectModulesByFilter);
  const navigate = useNavigate();

  function handleClickToNavigate(elId) {
    navigate(`/modules/${elId}`);
  }

  return (
    <div className="module">
      <h2>Your Modules: ({modules?.length})</h2>
      <ModuleFilter />
      <ul className="module__list">
        {modules?.map((el) => {
          return (
            <ModuleListItem
              key={el._id}
              onClick={() => handleClickToNavigate(el._id)}
              el={el}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ModuleList;
