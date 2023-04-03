import React, { useEffect, useState } from "react";
import useCardFlip from "../../hooks/useCardFlip";

type CardProps = {
  cards: { front: string; back: string }[];
};

const CardItem: React.FC<CardProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useCardFlip(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === " " || event.keyCode === 32) {
        setIsFlipped();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [cards.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const currentCard = cards[currentIndex];
  return (
    <div>
      <div className="card-container" onClick={setIsFlipped}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="front">{currentCard?.front}</div>
          <div className="back">{currentCard?.back}</div>
        </div>
      </div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CardItem;
