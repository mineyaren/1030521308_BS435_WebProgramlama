import React, { useState, useEffect } from "react";
import "./StartScreen.css"; // animasyonları CSS ile yapacağız

export default function StartScreen({ onStart }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let timer;
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      onStart();
    }
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
