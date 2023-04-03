import React, { useState } from "react";
import api from "../../services/api/api";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/userSlice";
import { useParams } from "react-router-dom";

const WordsInput = () => {
  const [firstWord, setFirstWord] = useState<string>("");
  const [secondWord, setSecondWord] = useState<string>("");
  const { id } = useParams();

  const dispatch = useDispatch();
  function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "first":
        setFirstWord(e.target.value);
        break;
      case "second":
        setSecondWord(e.target.value);
        break;
    }
  }

  async function handleAddCard(e: any) {
    e.preventDefault();
    try {
      const res = await api.post(`module/${id}/cards`, {
        front: firstWord,
        back: secondWord,
      });
      if (res.data) {
        console.log(res.data);
        dispatch(addCard({ moduleId: res.data.module[0], card: res.data }));
        setFirstWord("");
        setSecondWord("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className="addwords" onSubmit={handleAddCard}>
      <div className="addwords__card">
        {" "}
        <label htmlFor="">
          Original
          <input
            name="first"
            type="text"
            value={firstWord}
            onChange={onHandleChange}
          />
        </label>
      </div>
      <div className="addwords__card">
        <label htmlFor="">
          Translate
          <input
            name="second"
            type="text"
            value={secondWord}
            onChange={onHandleChange}
          />
        </label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default WordsInput;
