import React from "react";

export default function ResultScreen({ isCorrect, onRestart }) {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>{isCorrect ? "🎉 Tebrikler, doğru tahmin!" : "😅 Yanlış tahmin, bir dahaki sefere!"}</h2>
      <button
        onClick={onRestart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#28a745",
          color: "white",
          cursor: "pointer",
        }}
      >
        Yeni Tur Başlat
      </button>
    </div>
  );
}
