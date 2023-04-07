import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCard } from "../store/userSlice";

const EditCard = ({ onClose, card }) => {
  const [front, setFront] = useState(card.front);
  const [back, setBack] = useState(card.back);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "front") {
      setFront(value);
    } else {
      setBack(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(editCard({ cardId: card._id, front, back }));
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup-inner">
        <h2>Popup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Original">Original:</label>
            <input
              type="text"
              name="front"
              id="Original"
              value={front}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input2">Translate:</label>
            <input
              type="text"
              name="back"
              id="Translate"
              value={back}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
