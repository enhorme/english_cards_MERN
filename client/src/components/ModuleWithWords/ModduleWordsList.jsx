import React, { useState } from "react";
import { AiFillEdit, AiFillStar, AiFillSound } from "react-icons/ai";
import EditCard from "../EditCard";
import ModuleWordsListItem from "./ModuleWordsListItem";

const ModuleWordsList = ({ cards }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (cards.length)
    return (
      <>
        <ul className="wordslist">
          {cards?.map((el) => {
            return <ModuleWordsListItem card={el} />;
          })}
        </ul>
      </>
    );
  return null;
};

export default ModuleWordsList;
