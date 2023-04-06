import React from "react";
import { AiFillDelete } from "react-icons/ai";
import api from "../services/api/api";

function ModuleListItem({ onClick, el }) {
  const handleDelete = async (e) => {
    e.stopPropagation();
    try {
      const res = await api.delete(`/module/`, {
        params: {
          id: el._id,
        },
      });
      if (res.status === 200) {
        console.log("Module has been deleted");
      }
    } catch (e) {}
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
