import React, { useEffect, useState } from "react";

type CardProps = {
  frontText: string;
  backText: string;
};

const Card: React.FC<CardProps> = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " " || event.keyCode === 32) {
        console.log("flipped", isFlipped);
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      console.log("returned");
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="front">{frontText}</div>
        <div className="back">{backText}</div>
      </div>
    </div>
  );
};

export default Card;
