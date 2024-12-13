import React, { useEffect, useState } from "react";
import "./TypingEffect.css";

const TypingEffect = ({ texts, typingSpeed = 100, pauseTime = 1500 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentText.length < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            (prev) => prev + texts[currentIndex][currentText.length]
          );
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentText("");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, texts, typingSpeed, pauseTime, currentIndex]);

  return <h1 className="typing-effect">{currentText}</h1>;
};

export default TypingEffect;
