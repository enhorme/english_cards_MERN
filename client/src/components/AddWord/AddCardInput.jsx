import React from "react";

const AddCardInput = () => {
  return (
    <div className="addwords">
      <div className="addwords__card">
        <label htmlFor="">
          Original
          <input name="front" type="text" />
        </label>
      </div>
      <div className="addwords__card">
        <label htmlFor="">
          Translate
          <input name="back" type="text" />
        </label>
      </div>
    </div>
  );
};

export default AddCardInput;
