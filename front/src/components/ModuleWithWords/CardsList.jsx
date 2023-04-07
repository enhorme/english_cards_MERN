import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCardsByModuleId } from "../../store/userSlice";
import AddCard from "../AddWord/AddCard";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import ModuleWordsList from "./ModduleWordsList";

const CardsList = () => {
  const { id } = useParams();
  const [showAddCards, setShowAddCards] = useState(false);

  const cardsByModuleId = useSelector((state) => getCardsByModuleId(state, id));

  function handleToggleShowAddCards() {
    setShowAddCards((prev) => !prev);
  }

  return (
    <div>
      <CardItem cards={cardsByModuleId} />
      <button
        onClick={handleToggleShowAddCards}
        className="submit_button"
        style={{ background: showAddCards ? "grey" : "" }}
      >
        {!showAddCards ? "Add card" : "Hide"}
      </button>
      {showAddCards ? <AddCard /> : null}
      <ModuleWordsList cards={cardsByModuleId} />
    </div>
  );
};

export default CardsList;
