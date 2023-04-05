import React, { useState } from "react";
import { AiFillEdit, AiFillSound, AiFillStar } from "react-icons/ai";
import EditCard from "../EditCard";

const ModuleWordsListItem = ({ card }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { front, back } = card;

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <li className="wordslist__card">
        <div>
          <span>{front}</span> | <span>{back}</span>
        </div>
        <div className="wordslist__buttons-bar">
          <div>
            <AiFillStar />
          </div>
          <div>
            <AiFillSound />
          </div>
          <div onClick={handleShowPopup}>
            <AiFillEdit />
          </div>
        </div>
      </li>
      {showPopup && <EditCard onClose={handleClosePopup} card={card} />}
    </>
  );
};

export default ModuleWordsListItem;
