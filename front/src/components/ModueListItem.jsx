import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteModule } from "../store/userSlice";

function ModuleListItem({ onClick, el }) {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.stopPropagation();
    dispatch(deleteModule(el._id));
  };

  return (
    <li onClick={onClick}>
      <div>
        <h3>{el.title}</h3>
        <div>{el.cards.length}</div>
      </div>
      <div className="module__description">{el.description}</div>
      <div className="module_delete" onClick={handleDelete}>
        <AiFillDelete />
      </div>
    </li>
  );
}

export default ModuleListItem;
