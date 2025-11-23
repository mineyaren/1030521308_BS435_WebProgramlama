// src/components/ModeSelect.jsx
import React from "react";

export default function ModeSelect({ setMode, startGame }) {
  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h2>Oyun Modu Seç</h2>

      <button
        onClick={() => {
          setMode("hardcore");
          startGame();
        }}
        style={buttonStyle}
      >
        Hardcore Mode (Tek Hak)
      </button>

      <button
        onClick={() => {
          setMode("secondChance");
          startGame();
        }}
        style={buttonStyle}
      >
        Second Chance (2 Hak + İpucu)
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  margin: "10px",
  fontSize: "16px",
  cursor: "pointer",
};
