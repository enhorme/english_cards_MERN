import { useState } from "react";

const useCardFlip = (initialState = false) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(initialState);
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  return [isFlipped, handleFlip] as const;
};

export default useCardFlip;
