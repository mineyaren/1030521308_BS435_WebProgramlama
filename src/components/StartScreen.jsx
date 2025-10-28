import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🧠 Gerçeği Bul!</h1>
      <p>
        Üç görselden biri yapay zekâ tarafından üretilmiştir. 
        Hangisinin gerçek olmadığını tahmin edebilir misin?
      </p>
      <button
        onClick={onStart}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Başla
      </button>
    </div>
  );
}
