import React from "react";
import { useSelector } from "react-redux";
import { getUserModules } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import ModuleListItem from "./ModueListItem";

const ModuleList = () => {
  const modules = useSelector((state) => getUserModules(state));
  const navigate = useNavigate();

  function handleClickToNavigate(elId) {
    navigate(`/modules/${elId}`);
  }
  return (
    <div className="module">
      <h2>Your Modules: ({modules.length})</h2>
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
