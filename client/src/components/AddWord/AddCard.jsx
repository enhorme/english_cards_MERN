import React, { useEffect, useRef } from "react";
import api from "../../services/api/api";
import { useDispatch } from "react-redux";
import { addCards, postCards } from "../../store/userSlice";
import { useParams } from "react-router-dom";
import AddCardInput from "./AddCardInput";

const AddCard = () => {
  const formRef = useRef(null);
  const { id } = useParams();

  const dispatch = useDispatch();

  // async function handleAddCard(e) {
  //   e.preventDefault();
  //
  //   try {
  //     const { front, back } = formRef.current.elements;
  //
  //     const data = [...front].reduce((acc, el, idx) => {
  //       acc.push({
  //         front: el.value,
  //         back: back[idx].value,
  //       });
  //       return acc;
  //     }, []);
  //     const res = await api.post(`module/${id}/cards`, {
  //       cards: data,
  //     });
  //     if (res.data) {
  //       console.log(res.data);
  //       dispatch(addCards({ moduleId: id, cards: res.data }));
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  function handleAddCard(e) {
    e.preventDefault();
    dispatch(postCards({ dataRef: formRef.current.elements, id }));
    formRef.current.reset();
  }

  return (
    <form onSubmit={handleAddCard} ref={formRef}>
      <AddCardInput />
      <AddCardInput />
      <AddCardInput />
      <button className="submit_button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddCard;
