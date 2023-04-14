import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postCards } from "../../store/userSlice";
import { useParams } from "react-router-dom";
import AddCardInput from "./AddCardInput";

const AddCard = () => {
  const [wordsCount, setWordsCount] = useState(3);
  const formRef = useRef(null);
  const { id } = useParams();

  const fields = Array(wordsCount)
    .fill(null)
    .map((el, idx) => {
      return idx + 1;
    });

  const dispatch = useDispatch();

  function handleAddCard(e) {
    e.preventDefault();
    dispatch(postCards({ dataRef: formRef.current.elements, id })).then((_) => {
      formRef.current.reset();
    });
  }

  return (
    <form onSubmit={handleAddCard} ref={formRef}>
      {fields.map((el) => {
        return <AddCardInput key={el} id={el} />;
      })}

      <button className="submit_button" type="submit">
        Submit
      </button>
      <button onClick={() => setWordsCount((prev) => prev + 1)} type="button">
        add field
      </button>
    </form>
  );
};

export default AddCard;
