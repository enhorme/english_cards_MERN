import React, { useEffect, useState } from "react";
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import useCardFlip from "../../hooks/useCardFlip";

const CardItem = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useCardFlip(false);
  const [isSpeaking, setIsSpeaking] = useState(true);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);

    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const speakFrontText = () => {
      const speechSynthesis = window.speechSynthesis;
      const voiceFrontWord = new SpeechSynthesisUtterance(currentCard?.front);
      speechSynthesis.speak(voiceFrontWord);
    };
    if (isSpeaking) {
      speakFrontText();
    }
  }, [currentCard?.front]);

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
    }
  };

  return (
    <div>
      <div className="card-container" onClick={setIsFlipped}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="front">{currentCard?.front}</div>
          {isFlipped && <div className="back">{currentCard?.back}</div>}
        </div>

        <div className="card__speech-buttons">
          {isSpeaking ? (
            <FaVolumeUp
              className="card__speech-icon"
              onClick={handleToggleSpeech}
            />
          ) : (
            <FaVolumeOff
              className="card__speech-icon"
              onClick={handleToggleSpeech}
            />
          )}
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
