import React, { useState, useEffect } from "react";
import "./StartScreen.css";

export default function StartScreen({ onStart }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      onStart();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onStart]);

  return (
    <div className="start-container">
      {countdown === null ? (
        <>
          <h1 className="glow-text">🧠 Gerçeği Bul!</h1>

          <p className="start-description">
            Üç görselden biri yapay zekâ tarafından üretilmiştir.
            <br />
            Hangisinin gerçek olmadığını tahmin edebilir misin?
          </p>

          <button
            className="start-button"
            onClick={() => setCountdown(3)}
          >
            Başla
          </button>
        </>
      ) : (
        <h1 className="countdown-number">{countdown}</h1>
      )}
    </div>
  );
}
