import React, { useEffect, useState } from "react";
import useCardFlip from "../../hooks/useCardFlip";

const CardItem = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useCardFlip(false);

  const synth = window.speechSynthesis;

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    synth.speak(utterance);
  };

  const currentCard = cards[currentIndex];

  // useEffect(() => {
  //   if (cards[currentIndex].front) {
  //     speakWord(cards[currentIndex].front);
  //   }
  // }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div>
      <div className="card-container" onClick={setIsFlipped}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="front">{currentCard?.front}</div>
          <div className="back">{currentCard?.back}</div>
        </div>
      </div>
      <div className="buttons-bar">
        <div className="buttons-bar__navigate">
          <button onClick={handlePrevious}>Previous</button>
          <span>
            {cards.length === 0 ? 0 : currentIndex + 1} / {cards.length}{" "}
          </span>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
