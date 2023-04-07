import { useState } from "react";

const useCardFlip = (initialState = false) => {
  const [isFlipped, setIsFlipped] = useState(initialState);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  return [isFlipped, handleFlip];
};

export default useCardFlip;
