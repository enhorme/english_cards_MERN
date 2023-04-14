import React  from "react";
import {useNavigate} from "react-router-dom";
import ModuleListItem from "./ModueListItem";
import ModuleFilter from "./ModuleFilter";



const ModuleList = ({modules}) => {
    const navigate = useNavigate()

  function handleClickToNavigate(elId) {
    navigate(`/modules/${elId}`);
  }


  return (
    <div className="module">
      <h2>Modules: ({modules?.length})</h2>
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
