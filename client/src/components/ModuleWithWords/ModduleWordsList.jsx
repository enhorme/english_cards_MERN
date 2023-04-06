import React, { useState } from "react";

import ModuleWordsListItem from "./ModuleWordsListItem";

const ModuleWordsList = ({ cards }) => {
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
