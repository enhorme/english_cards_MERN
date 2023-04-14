import { useState } from "react";

const useCardFlip = (initialState = false) => {
  const [isFlipped, setIsFlipped] = useState(initialState);
  const handleFlip = (b) => {
    if (typeof b === "boolean") setIsFlipped(b);
    else setIsFlipped((prev) => !prev);
  };
  return [isFlipped, handleFlip];
};

export default useCardFlip;
