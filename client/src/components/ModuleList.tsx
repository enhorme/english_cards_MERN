import React from "react";
import { useSelector } from "react-redux";
import { getUserModules } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const ModuleList = () => {
  const modules = useSelector((state) => getUserModules(state));
  const navigate = useNavigate();
  function handleClickToNavigate(elId: any) {
    navigate(`/modules/${elId}`);
  }
  return (
    <ul>
      {modules?.map((el: any) => {
        return (
          <li key={el._id} onClick={() => handleClickToNavigate(el._id)}>
            {el.title} <span></span>
          </li>
        );
      })}
    </ul>
  );
};

export default ModuleList;
