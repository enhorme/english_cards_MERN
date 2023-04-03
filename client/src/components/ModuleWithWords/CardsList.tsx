import React from "react";
import { useSelector } from "react-redux";
import { getCardsByModuleId } from "../../store/userSlice";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import WordsInput from "../AddWord/WordsInput";

const CardsList = () => {
  const { id } = useParams();
  const cardsByModuleId = useSelector((state) => getCardsByModuleId(state, id));

  return (
    <div>
      <CardItem cards={cardsByModuleId} />
      <WordsInput />
    </div>
  );
};

export default CardsList;
